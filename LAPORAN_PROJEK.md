SMK NEGERI 4 TANJUNGPINANG

KOMPETENSI KEAHLIAN REKAYASA PERANGKAT LUNAK

[Ilustrasi tertanam pada dokumen Word.]

LAPORAN PROJECT BASED LEARNING (PjBL)

APLIKASI KALKULATOR SEDERHANA

PROJEK TERINTEGRASI PAS KELAS XII RPL TAHUN 2026

Mata Pelajaran: Rekayasa Perangkat Lunak

Koding dan Kecerdasan Artifisial, KIK, dan Matematika

Bahasa Inggris, Bahasa Indonesia, dan Pendidikan Pancasila

Disusun oleh:

Muhammad Haikal

Kelas XII RPL



TANJUNGPINANG

2026

KATA PENGANTAR

Puji syukur penulis panjatkan kepada Tuhan Yang Maha Esa karena laporan projek aplikasi kalkulator ini dapat disusun. Projek ini merupakan tugas individu Penilaian Akhir Semester kelas XII Rekayasa Perangkat Lunak tahun 2026 di SMK Negeri 4 Tanjungpinang.

Laporan ini menjelaskan alasan pembuatan aplikasi, rancangan, langkah pengerjaan, hasil, dan pengujian. Aplikasi dibuat untuk menerima dua angka dan menjalankan penjumlahan, pengurangan, perkalian, atau pembagian. Masukan yang kosong atau tidak sesuai diperiksa sebelum hasil ditampilkan.

Penulis mengucapkan terima kasih kepada guru pembimbing dan pihak yang memberi arahan. Laporan ini disusun berdasarkan proses pembuatan aplikasi pada 9–27 November 2026. Semoga laporan ini membantu pembaca memahami proses pembuatan aplikasi.

Tanjungpinang, 27 November 2026

Penulis,

Muhammad Haikal

# DAFTAR ISI

- KATA PENGANTAR

- DAFTAR TABEL DAN GAMBAR

- BAB I - PENDAHULUAN

  - Latar Belakang, Rumusan Masalah, Tujuan Proyek, Manfaat Proyek

- BAB II - PERENCANAAN PROYEK

  - Pertanyaan Mendasar, Desain/Rancangan, Alat dan Bahan, Pembagian Tugas Individu

- BAB III - PELAKSANAAN DAN JADWAL

  - Timeline, Langkah Kerja, Kendala dan Solusi

- BAB IV - HASIL DAN PEMBAHASAN

  - Deskripsi Produk, Analisis/Evaluasi, Integrasi Mata Pelajaran

- BAB V - PENUTUP

  - Kesimpulan, Saran

- LAMPIRAN

Jika daftar isi belum tampil, buka dokumen di Microsoft Word, klik kanan bagian ini, lalu pilih "Perbarui bidang".

DAFTAR TABEL DAN GAMBAR

## Daftar Tabel

Tabel 2.1 Alat dan bahan / sumber data

Tabel 2.2 Pembagian tugas individu

Tabel 3.1 Jadwal pelaksanaan projek

Tabel 3.2 Kendala dan cara mengatasi

Tabel 4.1 Hasil pengujian aplikasi
Tabel 4.2 Integrasi mata pelajaran dalam projek

## Daftar Gambar

Gambar 2.1 Flowchart alur aplikasi

Gambar 2.2 Rancangan antarmuka kalkulator

Gambar 4.1 Tampilan utama aplikasi (isi screenshot aktual)

Gambar 4.2 Contoh hasil perhitungan (isi screenshot aktual)

Lampiran 1 Dokumentasi kegiatan (foto aktual belum dilampirkan)

# BAB I - PENDAHULUAN

## 1.1 Latar Belakang

Perhitungan sederhana sering muncul saat belajar, berbelanja, atau memeriksa jumlah barang. Jika dilakukan terburu-buru, pengguna dapat salah menjumlahkan atau salah memasukkan angka. Kalkulator membantu mempercepat pekerjaan tersebut, tetapi cara kerja aplikasi tetap perlu dirancang agar masukan dan hasilnya jelas.

Pada projek PAS ini, peserta diminta membuat aplikasi kalkulator untuk dua angka dengan empat operasi dasar. Projek ini dipilih karena dapat menunjukkan hubungan antara input, variabel, percabangan, perhitungan, dan output dalam program. Aplikasi juga perlu menolak input yang tidak sesuai dan memberi pesan jika pengguna mencoba membagi dengan nol.

## 1.2 Rumusan Masalah

1. Bagaimana membuat antarmuka untuk memasukkan dua angka dan memilih operasi?

1. Bagaimana menerapkan penjumlahan, pengurangan, perkalian, dan pembagian pada program?

1. Bagaimana memeriksa input yang kosong atau tidak valid serta menangani pembagian dengan nol?

1. Bagaimana memastikan hasil program sesuai dengan perhitungan matematika?

## 1.3 Tujuan Proyek

- Membuat aplikasi kalkulator berbasis web dengan empat operasi dasar.

- Menerapkan variabel, akses field, percabangan, dan validasi input.

- Menampilkan hasil dan pesan kesalahan yang mudah dipahami.

- Menguji aplikasi menggunakan angka positif, negatif, desimal, input tidak valid, dan pembagian dengan nol.

## 1.4 Manfaat Proyek

- Bagi peserta didik: berlatih menyusun alur program, menulis kode, dan memeriksa hasil hitung.

- Bagi pengguna: membantu menghitung dua angka dengan langkah yang sederhana.

- Bagi pembelajaran: menghubungkan pemrograman dengan matematika, desain antarmuka, literasi, dan tanggung jawab digital.

# BAB II - PERENCANAAN PROYEK

## 2.1 Pertanyaan Mendasar (Essential Question)

Bagaimana aplikasi kalkulator sederhana dapat membantu pengguna menghitung dua angka dengan benar dan memberi tahu pengguna saat inputnya salah?

## 2.2 Desain / Rancangan Produk atau Solusi

Produk yang dibuat adalah halaman web kalkulator yang dijalankan pada browser. Pengguna mengisi field Angka pertama dan Angka kedua, lalu memilih salah satu tombol operasi. Hasil ditampilkan pada field Hasil / Result. Tombol Bersihkan / Clear mengosongkan kembali form.

Fitur yang dirancang:

- Penjumlahan, pengurangan, perkalian, dan pembagian.

- Angka negatif dan desimal dapat digunakan. Dalam format Indonesia, titik memisahkan ribuan dan koma menandai desimal. Contoh: 1.500 berarti seribu lima ratus dan 12,5 berarti dua belas setengah.

- Validasi input kosong atau berformat salah, serta pesan khusus jika angka kedua pada pembagian bernilai nol.

- Istilah teknis dan petunjuk singkat dalam Bahasa Inggris pada antarmuka.

Alur program dimulai dengan membaca dua input. Program memvalidasi keduanya, menjalankan operasi yang dipilih, lalu menampilkan hasil. Jika input tidak valid atau pembagian dilakukan dengan nol, program menampilkan pesan kesalahan.

[Ilustrasi tertanam pada dokumen Word.]

Gambar 2.1 Flowchart alur aplikasi kalkulator

[Ilustrasi tertanam pada dokumen Word.]

Gambar 2.2 Rancangan antarmuka kalkulator (wireframe)

## 2.3 Alat dan Bahan / Sumber Data

Alat dan bahan yang diperlukan untuk membuat dan menjalankan projek ditunjukkan pada Tabel 2.1. Perangkat yang digunakan untuk mengerjakan projek dicatat pada tabel berikut.

| No. | Kategori | Keterangan |

| --- | --- | --- |

| 1 | Perangkat keras | Laptop; spesifikasi rinci tidak dicatat. |

| 2 | Sistem operasi | Windows. |

| 3 | Bahasa pemrograman | HTML, CSS, dan JavaScript. |

| 4 | Editor / IDE | Visual Studio Code. |

| 5 | Aplikasi pendukung | Google Chrome; tidak memakai library tambahan. |

| 6 | Sumber data | Dokumen soal PAS 2026, dokumen analisis integrasi, lembar penilaian, dan contoh perhitungan matematika. |



Tabel 2.1 Alat dan bahan / sumber data

## 2.4 Pembagian Tugas Individu

Projek ini dikerjakan secara individu. Peserta bertanggung jawab menganalisis kebutuhan, merancang, menulis kode, menguji, memperbaiki, dan menyusun laporan.

| No. | Nama peserta | Peran | Tanggung jawab |

| --- | --- | --- | --- |

| 1 | Muhammad Haikal | Pelaksana projek | Menganalisis soal, merancang UI dan alur, menulis kode, menguji, memperbaiki, mendokumentasikan, dan mempresentasikan aplikasi. |



Tabel 2.2 Pembagian tugas individu

# BAB III - PELAKSANAAN DAN JADWAL

## 3.1 Penjadwalan / Timeline Kerja

Alokasi projek pada soal adalah dua sampai tiga minggu. Tabel berikut merupakan pembagian tahap kerja. Pelaksanaan projek berlangsung pada 9–27 November 2026.

| No. | Kegiatan | Waktu | Catatan pelaksanaan |

| --- | --- | --- | --- |

| 1 | Membaca soal dan mengumpulkan kebutuhan | 9–13 November 2026 | Kegiatan berada dalam rentang pelaksanaan projek. |

| 2 | Menyusun rancangan UI dan alur program | 9–13 November 2026 | Kegiatan berada dalam rentang pelaksanaan projek. |

| 3 | Membuat halaman dan logika kalkulator | 16–20 November 2026 | Kegiatan berada dalam rentang pelaksanaan projek. |

| 4 | Menguji dan memperbaiki aplikasi | 16–20 November 2026 | Kegiatan berada dalam rentang pelaksanaan projek. |

| 5 | Menyusun laporan dan menyiapkan presentasi | 23–27 November 2026 | Kegiatan berada dalam rentang pelaksanaan projek. |



Tabel 3.1 Jadwal pelaksanaan projek

## 3.2 Proses Pelaksanaan / Langkah Kerja

Pengumpulan data. Membaca dokumen soal, analisis integrasi mata pelajaran, dan lembar penilaian. Informasi tersebut digunakan untuk menetapkan fitur yang harus ada.

Analisis kebutuhan. Menetapkan dua input angka, empat operasi, field hasil, validasi, dan pesan pembagian dengan nol.

Perancangan produk. Membuat wireframe sederhana dan alur input -> validasi -> operasi -> hasil. Rancangan disimpan pada folder rancangan-aplikasi.

Pembuatan produk. Menyusun halaman menggunakan HTML, mengatur tampilannya dengan CSS, lalu membuat logika input dan operasi dengan JavaScript.

Implementasi. Membuka file index.html melalui browser untuk menjalankan halaman kalkulator.

Pengujian. Menguji operasi dasar, angka negatif dan desimal, input kosong atau salah format, pemisah ribuan, karakter huruf, dan pembagian dengan nol.

Evaluasi dan penyempurnaan. Memperbaiki validasi karakter dan format angka setelah menemukan bahwa input angka browser dapat menerima huruf e untuk notasi eksponen. Input lalu dibuat berbentuk teks dengan penyaringan karakter yang diizinkan.

## 3.3 Kendala yang Dihadapi dan Cara Mengatasinya

| No. | Kendala | Cara mengatasi |

| --- | --- | --- |

| 1 | Field angka bawaan browser dapat menerima huruf e sebagai notasi eksponen. | Menggunakan field teks dengan papan ketik desimal dan membatasi karakter input menjadi angka, tanda minus, titik, atau koma. |

| 2 | Format angka Indonesia memakai titik untuk memisahkan ribuan dan koma untuk menandai desimal. Contoh: 1.500 berarti seribu lima ratus, sedangkan 12,5 berarti dua belas setengah. | Program membaca titik pada angka besar sebagai pemisah ribuan dan koma sebagai tanda desimal. Contoh: 1.500 dibaca 1500, sedangkan 12,5 dibaca dua belas setengah. |

| 3 | Antarmuka dan alur perlu mengikuti soal yang meminta dua input terpisah. | Menggunakan field Angka pertama dan Angka kedua, empat tombol operasi, serta field Hasil. |



Tabel 3.2 Kendala dan cara mengatasi

# BAB IV - HASIL DAN PEMBAHASAN

## 4.1 Deskripsi Produk / Hasil Akhir

Hasil projek adalah aplikasi kalkulator sederhana berbasis web yang dibuat dengan HTML, CSS, dan JavaScript. Halaman memiliki dua field input, tombol Addition, Subtraction, Multiplication, dan Division, field Hasil / Result, pesan status, serta tombol Bersihkan / Clear. Aplikasi menggunakan format angka Indonesia dan tidak menyimpan data pengguna.

Pengguna mengisi dua angka lalu menekan operasi yang dibutuhkan. Program memeriksa input sebelum menghitung. Jika input valid, rumus dan hasil ditampilkan. Jika input kosong, format salah, atau pembagian dengan nol, program menampilkan pesan yang sesuai.

Sisipkan screenshot aktual aplikasi yang dijalankan di Google Chrome pada ruang berikut. Jangan gunakan gambar wireframe sebagai bukti tampilan akhir.

| Screenshot tampilan utama belum dilampirkan. Ambil dari aplikasi yang berjalan di Chrome. |

Gambar 4.1 Tampilan utama aplikasi kalkulator (isi screenshot aktual)

| Screenshot hasil perhitungan belum dilampirkan. Ambil setelah melakukan hitungan di Chrome. |

Gambar 4.2 Contoh hasil perhitungan (isi screenshot aktual)

## 4.2 Analisis Data atau Evaluasi Hasil Proyek

Pengujian menggunakan pendekatan black-box: beberapa input diberikan melalui tombol operasi, lalu keluaran dibandingkan dengan hasil yang diharapkan. Pemeriksaan logika dijalankan melalui Node.js dengan DOM tiruan. Hasil aktual tercatat pada Tabel 4.1.

| No. | Skenario | Input | Hasil harapan | Hasil pemeriksaan | Status |

| --- | --- | --- | --- | --- | --- |

| 1 | Penjumlahan | 8 + 4 | 12 | 12 | Lulus |

| 2 | Pengurangan | 8 - 4 | 4 | 4 | Lulus |

| 3 | Perkalian | 8 x 4 | 32 | 32 | Lulus |

| 4 | Pembagian | 8 / 4 | 2 | 2 | Lulus |

| 5 | Pembagian dengan nol | 8 / 0 | Pesan kesalahan | Pesan pembagian dengan nol | Lulus |

| 6 | Input kosong | kosong + 4 | Pesan kesalahan | Pesan input tidak lengkap | Lulus |

| 7 | Format tidak valid | 1,,2 + 4 | Pesan kesalahan | Pesan format input | Lulus |

| 8 | Bilangan desimal | 2,5 + 1,5 | 4 | 4 | Lulus |

| 9 | Bilangan negatif | -3 + 5 | 2 | 2 | Lulus |

| 10 | Pemisah ribuan | 1.000.000 + 2 | 1.000.002 | 1.000.002 | Lulus |

| 11 | Karakter huruf | ketik e | Karakter ditolak | Karakter diblokir sebelum input | Lulus |



Tabel 4.1 Hasil pengujian aplikasi

Sebelas pemeriksaan logika pada tabel menghasilkan keluaran sesuai harapan. Uji ini mencakup operasi normal, batas input, dan pesan kesalahan. Pemeriksaan visual pada browser dan perangkat presentasi belum tercatat. Jalankan aplikasi di Google Chrome, cocokkan hasil dengan tabel uji, lalu masukkan screenshot aktual sebelum laporan diserahkan.

## Integrasi Antarmata Pelajaran

| Mata pelajaran | Penerapan | Bukti |

| --- | --- | --- |

| RPL | Menganalisis kebutuhan, merancang field, menulis logika, memvalidasi input, dan menampilkan hasil. | Source code dan demonstrasi aplikasi. |

| Koding dan Kecerdasan Artifisial (KKA) | Menyusun urutan input, validasi, pemilihan operasi, dan output; memeriksa bantuan AI secara kritis. | Flowchart, logika program, dan penjelasan peserta. |

| KIK | Memilih tata letak, warna, label, dan tombol yang mudah dibaca. | Wireframe dan tampilan aplikasi. |

| Matematika | Memakai empat operasi serta menguji angka negatif, desimal, dan pembagian dengan nol. | Rumus dan tabel uji. |

| Bahasa Inggris | Menggunakan istilah operasi, label field, dan petunjuk singkat pada halaman. | Addition, Subtraction, Multiplication, Division, First number, Second number, Result, Clear. |

| Bahasa Indonesia | Menjelaskan proses, hasil, kendala, dan saran dengan runtut. | Laporan dan presentasi. |

| Pendidikan Pancasila (PKN) | Bertanggung jawab atas hasil, jujur mencatat bantuan, menjaga data, dan menghargai sumber. | Catatan bantuan AI/sumber dan demonstrasi. |



Tabel 4.2 Integrasi mata pelajaran dalam projek

## Kelebihan dan kekurangan

Kelebihan aplikasi adalah alurnya singkat, label dua input mudah dibedakan, hasil tampil pada field tersendiri, dan pesan kesalahan disediakan. Format titik ribuan membantu membaca angka besar. Kekurangannya, aplikasi hanya menangani empat operasi dasar, tidak memiliki riwayat, dan pengujian tampilan lintas browser belum dicatat.

Pengembangan selanjutnya dapat menambahkan riwayat hitung atau cara menghapus hasil satu per satu jika fitur tersebut diperlukan. Fitur baru perlu diuji sebelum digunakan.

# BAB V - PENUTUP

## 5.1 Kesimpulan

Aplikasi kalkulator berhasil dibuat sebagai halaman web dengan dua field angka, empat operasi dasar, dan field hasil. Program memvalidasi masukan, menangani pembagian dengan nol, dan menampilkan angka dalam format Indonesia. Pengujian logika pada sebelas skenario menghasilkan keluaran sesuai harapan; pemeriksaan tampilan di browser masih perlu dilakukan sebelum presentasi.

Projek ini menerapkan materi RPL dan menghubungkannya dengan logika KKA, operasi Matematika, rancangan UI, istilah Bahasa Inggris, laporan Bahasa Indonesia, serta sikap tanggung jawab digital.

## 5.2 Saran

1. Tambahkan dokumentasi foto kegiatan yang benar-benar dilakukan sebelum laporan diserahkan.

1. Jalankan aplikasi di browser yang akan digunakan saat presentasi, lalu periksa semua kasus uji dan simpan screenshot aktual.

1. Pastikan peserta memahami struktur data dan setiap percabangan agar dapat menjelaskan program sendiri.

1. Jika menambahkan fitur, sesuaikan dengan kebutuhan pengguna dan uji kembali sebelum digunakan.

LAMPIRAN

## Lampiran 1. Dokumentasi Tampilan Aplikasi

Tangkapan layar aplikasi dan hasil perhitungan tercantum pada Gambar 4.1 dan Gambar 4.2.

| Tampilan aplikasi ditunjukkan pada Gambar 4.1; contoh hasil hitung ditunjukkan pada Gambar 4.2. |

| --- |



Lampiran 1.1 Tampilan aplikasi (Gambar 4.1)

| Lihat Gambar 4.1. |

| --- |



Lampiran 1.2 Contoh hasil pengujian (Gambar 4.2)

## Lampiran 2. Lembar Kerja / Catatan Pengujian

Hasil pengujian logika tercatat pada Tabel 4.1. Lembar kerja terpisah tidak dilampirkan.

### Catatan Sumber dan Bantuan Digital

Dokumen soal PAS, analisis integrasi, lembar penilaian, dan aset rancangan dipakai sebagai rujukan. ChatGPT membantu merapikan kode dan laporan; hasilnya diperiksa dengan kasus uji. Peserta perlu memahami kode, menjelaskan bantuan yang digunakan sesuai arahan guru, dan tidak memasukkan data pribadi.

## Lampiran 3. Catatan Bimbingan

Catatan bimbingan tidak dilampirkan.

## Lampiran 4. Instrumen Survei (Jika Digunakan)

Survei tidak wajib jika tidak dilakukan. Jika peserta meminta masukan pengguna, tulis jawaban asli dan jangan mengisi hasil yang tidak dikumpulkan.

1. Apakah label kedua angka mudah dipahami?

1. Apakah tombol operasi mudah dikenali?

1. Apakah hasil dan pesan kesalahan mudah dibaca?

1. Saran apa yang ingin diberikan untuk aplikasi ini?

Nama/inisial responden (opsional): tidak dicantumkan    Tanggal: diisi jika survei dilakukan

Catatan jawaban: diisi hanya jika survei benar-benar dilakukan; jika tidak, hapus lampiran ini.