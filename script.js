"use strict";

const angka1 = document.querySelector("#angka-pertama");
const angka2 = document.querySelector("#angka-kedua");
const hasil = document.querySelector("#hasil");
const pesan = document.querySelector("#pesan");
const rumus = document.querySelector("#rumus");
const tombolOperasi = [...document.querySelectorAll("[data-operasi]")];
const tombolHapus = [...document.querySelectorAll("[data-hapus]")];
const daftarRiwayat = document.querySelector("#daftar-riwayat");
const riwayatKosong = document.querySelector("#riwayat-kosong");
const kunciRiwayat = "kalkulator-riwayat";
const formatAngka = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 10 });
const simbolOperasi = { tambah: "+", kurang: "\u2212", kali: "\u00d7", bagi: "\u00f7" };
let riwayat = [];

try {
  riwayat = JSON.parse(localStorage.getItem(kunciRiwayat) || "[]");
  if (!Array.isArray(riwayat)) riwayat = [];
} catch {
  riwayat = [];
}

function tampilkanRiwayat() {
  daftarRiwayat.replaceChildren();
  riwayat.forEach((item) => {
    const baris = document.createElement("li");
    baris.textContent = item;
    daftarRiwayat.append(baris);
  });
  riwayatKosong.hidden = riwayat.length > 0;
  document.querySelector("#hapus-riwayat").disabled = riwayat.length === 0;
}

function simpanRiwayat(rumusHitung) {
  riwayat.unshift(rumusHitung);
  riwayat = riwayat.slice(0, 20);
  try {
    localStorage.setItem(kunciRiwayat, JSON.stringify(riwayat));
  } catch {
    // Riwayat tetap tampil selama halaman ini terbuka jika penyimpanan browser tidak tersedia.
  }
  tampilkanRiwayat();
}

tampilkanRiwayat();

document.querySelector("#hapus-riwayat").addEventListener("click", () => {
  riwayat = [];
  try { localStorage.removeItem(kunciRiwayat); } catch {}
  tampilkanRiwayat();
});

function pilihOperasi(tombolAktif) {
  tombolOperasi.forEach((tombol) => {
    const dipilih = tombol === tombolAktif;
    tombol.setAttribute("aria-pressed", String(dipilih));
    tombol.classList.toggle("selected", dipilih);
  });
}

function ambilAngka(input) {
  let teks = input.value.trim();
  if (!teks) return NaN;
  const titik = (teks.match(/\./g) || []).length;
  if (teks.includes(",")) teks = teks.replace(/\./g, "").replace(",", ".");
  else if (titik > 1 || /\.\d{3}$/.test(teks)) teks = teks.replace(/\./g, "");
  return Number(teks);
}

[angka1, angka2].forEach((input) => {
  input.addEventListener("input", () => {
    hasil.value = "";
    rumus.textContent = "";
    pesan.textContent = "";
    pesan.classList.remove("success");
    pilihOperasi(null);
  });
  input.addEventListener("beforeinput", (e) => {
    if (e.data && /[^0-9.,-]/.test(e.data)) e.preventDefault();
  });
  input.addEventListener("paste", (e) => {
    if (/[^0-9.,-]/.test(e.clipboardData.getData("text"))) e.preventDefault();
  });
  input.addEventListener("focus", () => {
    input.value = input.value.replace(/\./g, "");
  });
  input.addEventListener("blur", () => {
    const angka = ambilAngka(input);
    if (Number.isFinite(angka)) input.value = formatAngka.format(angka);
  });
});

tombolHapus.forEach((tombol) => {
  tombol.addEventListener("pointerdown", (e) => e.preventDefault());
  tombol.addEventListener("click", () => {
    const input = document.getElementById(tombol.dataset.hapus);
    input.focus();
    const awal = input.selectionStart ?? input.value.length;
    const akhir = input.selectionEnd ?? awal;
    const hapusDari = awal === akhir ? Math.max(0, awal - 1) : awal;
    if (awal === akhir && awal === 0) return;
    input.setRangeText("", hapusDari, akhir, "start");
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
});

tombolOperasi.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const a = ambilAngka(angka1);
    const b = ambilAngka(angka2);
    hasil.value = "";
    rumus.textContent = "";
    pesan.textContent = "";
    pesan.classList.remove("success");
    pilihOperasi(tombol);
    if (!angka1.value.trim() || !angka2.value.trim()) {
      pesan.textContent = "Isi kedua kolom angka terlebih dahulu.";
      return;
    }
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      pesan.textContent = "Periksa format angka yang dimasukkan.";
      return;
    }
    if (tombol.dataset.operasi === "bagi" && b === 0) {
      pesan.textContent = "Tidak bisa membagi dengan nol.";
      return;
    }

    let nilai;
    if (tombol.dataset.operasi === "tambah") nilai = a + b;
    if (tombol.dataset.operasi === "kurang") nilai = a - b;
    if (tombol.dataset.operasi === "kali") nilai = a * b;
    if (tombol.dataset.operasi === "bagi") nilai = a / b;
    if (Number.isFinite(nilai)) {
      const angkaPertama = formatAngka.format(a);
      const angkaKedua = formatAngka.format(b);
      const hasilFormat = formatAngka.format(nilai);
      hasil.value = hasilFormat;
      rumus.textContent = `${angkaPertama} ${simbolOperasi[tombol.dataset.operasi]} ${angkaKedua} = ${hasilFormat}`;
      simpanRiwayat(rumus.textContent);
    } else {
      pesan.textContent = "Hasil terlalu besar.";
    }
  });
});

document.querySelector("#calculator-form").addEventListener("reset", () => {
  hasil.value = "";
  rumus.textContent = "";
  pesan.textContent = "";
  pesan.classList.remove("success");
  pilihOperasi(null);
  pesan.textContent = "Kolom sudah dibersihkan.";
  pesan.classList.add("success");
});
