# Prototipe Aplikasi ULAS (Unit Layanan Afirmasi Sekolah)

## 📂 Tentang Proyek

**ULAS** adalah prototipe aplikasi web yang dirancang sebagai _Proof of Concept_ (PoC) untuk sebuah sistem informasi terpusat guna mengelola proses penerimaan siswa baru melalui **Jalur Afirmasi**.

Proyek ini lahir dari kebutuhan untuk mengoptimalkan proses yang selama ini seringkali manual, terfragmentasi, dan rentan terhadap kesalahan. Prototipe ini mensimulasikan alur kerja inti dari pengumpulan data, verifikasi otomatis, hingga penyajian data yang informatif bagi operator administrasi.

Tujuan utama dari prototipe ini adalah:

- **Memvalidasi Alur Kerja:** Membuktikan efisiensi alur "Import -> Verifikasi -> Kategorisasi".
- **Menyediakan Demo Fungsional:** Menjadi alat demo yang tangibel untuk pemangku kepentingan.
- **Mengurangi Beban Kerja:** Menunjukkan bagaimana otomatisasi dapat secara drastis mengurangi pekerjaan manual.

## ✨ Fitur Utama

Prototipe ini mencakup fitur-fitur esensial sebagai berikut:

- **Dashboard Statistik:** Memberikan gambaran ringkas mengenai jumlah total pendaftar, siswa yang diterima, ditolak, dan yang masih dalam proses.
- **Manajemen Data Siswa:** Halaman utama untuk mengelola semua data pendaftar.
- **Import Data Massal (Simulasi):** Operator dapat mengunggah file `.csv` atau `.xlsx` yang berisi ratusan data siswa, menghilangkan kebutuhan entri data manual.
- **Verifikasi Otomatis (Simulasi):** Sistem secara otomatis "memverifikasi" setiap siswa yang diimpor terhadap data dummy (Dukcapil, DTKS, Dapodik) untuk menentukan validitas dan kategori afirmasi.
- **Pencarian & Filter Dinamis:** Memungkinkan operator untuk dengan cepat mencari siswa berdasarkan Nama/NIK dan memfilter daftar berdasarkan:
  - Kategori Afirmasi (DTKS, ATS, Anak Panti, dll.)
  - Status Verifikasi (Valid, Tidak Valid)
  - Status Penerimaan (Diterima, Ditolak, dll.)
- **Manajemen Kuota Sekolah:** Halaman untuk mengelola daftar sekolah dan alokasi kuota afirmasi mereka.
- **Antarmuka yang Bersih & Responsif:** Desain UI/UX low-fidelity yang fungsional dan mudah digunakan.

## 🛠️ Tumpukan Teknologi (Tech Stack)

Prototipe ini dibangun sebagai aplikasi web statis untuk mendemonstrasikan fungsionalitas di sisi klien (frontend).

- **Frontend:**

  - **HTML5:** Struktur dasar halaman.
  - **CSS3:** Styling untuk tata letak dan komponen visual.
  - **JavaScript (Vanilla JS):** Logika untuk interaktivitas, seperti membuka modal, dan fungsionalitas filter/pencarian dinamis.

- **Arsitektur Desain:**
  - **Low-Fidelity Prototyping:** Fokus pada struktur, alur, dan fungsionalitas daripada estetika visual yang mendalam.
  - **Component-Based UI:** Menggunakan komponen yang dapat digunakan kembali seperti modal, kartu statistik, dan tabel.

## 🚀 Menjalankan Prototipe Secara Lokal

Untuk menjalankan prototipe ini di komputer Anda, ikuti langkah-langkah sederhana berikut. Anda hanya memerlukan sebuah browser web.

**1. Clone Repositori**

```bash
git clone https://github.com/nama-anda/ulas-prototype.git
```

**2. Navigasi ke Direktori Proyek**

```bash
cd ulas-prototype
```

**3. Buka File di Browser**

- Buka file `login.html` langsung di browser web favorit Anda (misalnya, Google Chrome, Firefox).
- Anda tidak perlu menginstal dependensi atau menjalankan server lokal, karena prototipe ini murni menggunakan teknologi frontend (HTML, CSS, JS).

**4. Gunakan Aplikasi**

- **Login:** Gunakan kredensial apa saja di halaman login (ini adalah simulasi). Klik tombol "Login".
- **Navigasi:** Gunakan sidebar untuk berpindah antara halaman Dashboard, Data Siswa, dan Kuota Sekolah.
- **Interaksi:** Coba gunakan fitur pencarian dan filter di halaman Data Siswa. Klik tombol "Import Siswa" atau "Tambah Siswa" untuk melihat fungsionalitas modal.

## 🎯 Lingkup & Pengembangan Selanjutnya

Prototipe ini secara sengaja **tidak mencakup**:

- Koneksi backend atau database sungguhan.
- Integrasi API langsung ke sistem pemerintah.
- Sistem autentikasi yang aman.

Langkah pengembangan selanjutnya yang potensial adalah:

1.  Membangun **backend (misalnya dengan Node.js/Express)** untuk mengelola data di database (seperti MongoDB).
2.  Mengimplementasikan **sistem autentikasi berbasis token (JWT)**.
3.  Mengganti logika simulasi dengan **panggilan API nyata** ke layanan terkait.
4.  Mengembangkan aplikasi frontend menjadi **Single Page Application (SPA)** menggunakan framework seperti React, Vue, atau Angular.
