### **Software Requirements Specification (SRS): Prototipe Aplikasi ULAS v1.0**

| **Dokumen** | SRS - Prototipe Aplikasi ULAS |
| :--- | :--- |
| **Versi** | 1.0 |
| **Tanggal** | 26 Agustus 2025 |
| **Penulis** | Akhmad Khanif Zyen |
| **Status** | **Draft** |

### **1. Pendahuluan**

#### **1.1. Tujuan Dokumen**
Dokumen ini menyediakan spesifikasi persyaratan perangkat lunak yang detail untuk pengembangan **Prototipe Aplikasi ULAS v1.0**. Tujuannya adalah untuk memberikan pemahaman yang jelas dan tidak ambigu kepada tim pengembang tentang apa yang harus dibangun. Dokumen ini akan menjadi landasan untuk desain, pengembangan, dan pengujian sistem.

#### **1.2. Lingkup Produk**
Perangkat lunak ini adalah aplikasi web berbasis *dashboard* administrasi yang dirancang untuk mengelola proses penerimaan siswa jalur afirmasi. Prototipe ini akan mengimplementasikan fungsionalitas inti dari sistem ULAS, dengan fokus pada import data massal dan simulasi verifikasi data secara otomatis menggunakan data dummy. Aplikasi ini ditujukan untuk pengguna internal (Operator/Admin) di lingkungan Dinas Pendidikan.

#### **1.3. Definisi, Akronim, dan Singkatan**
*   **ULAS:** Unit Layanan Afirmasi Sekolah.
*   **SRS:** Software Requirements Specification.
*   **PRD:** Product Requirements Document.
*   **API:** Application Programming Interface.
*   **CSV:** Comma-Separated Values.
*   **Dukcapil:** Direktorat Jenderal Kependudukan dan Pencatatan Sipil.
*   **DTKS:** Data Terpadu Kesejahteraan Sosial.
*   **Dapodik:** Data Pokok Pendidikan.
*   **NIK:** Nomor Induk Kependudukan.
*   **NPSN:** Nomor Pokok Sekolah Nasional.
*   **UI:** User Interface (Antarmuka Pengguna).
*   **CRUD:** Create, Read, Update, Delete.

#### **1.4. Referensi**
*   Dokumen PRD - Prototipe Aplikasi ULAS v1.0
*   Dokumen Alur Pikir Aksi Perubahan
*   Dokumen Arsitektur Sistem ULAS

#### **1.5. Tinjauan Umum Dokumen**
Dokumen ini terbagi menjadi beberapa bagian utama: deskripsi umum produk, persyaratan fungsional spesifik, persyaratan antarmuka eksternal, persyaratan non-fungsional, dan batasan sistem.

### **2. Deskripsi Umum**

#### **2.1. Perspektif Produk**
Aplikasi ULAS v1.0 adalah produk mandiri (*standalone*). Namun, arsitekturnya dirancang untuk dapat diintegrasikan dengan sistem eksternal (Dukcapil, DTKS, Dapodik) melalui API di versi mendatang. Untuk prototipe ini, integrasi tersebut akan disimulasikan dengan mengakses file data dummy yang berada di server lokal.

#### **2.2. Fungsi Produk**
Fungsi utama perangkat lunak ini meliputi:
1.  **Autentikasi Pengguna:** Sistem login untuk admin.
2.  **Manajemen Data Siswa:** Mengimpor data siswa secara massal dari file, menambah data secara manual, dan melihat data dalam bentuk tabel.
3.  **Verifikasi Data (Simulasi):** Melakukan verifikasi data siswa secara otomatis terhadap data dummy.
4.  **Manajemen Kuota Sekolah:** Operasi CRUD untuk data sekolah dan kuota afirmasi.
5.  **Visualisasi Data:** Menampilkan ringkasan statistik di halaman dashboard.

#### **2.3. Karakteristik Pengguna**
Pengguna utama adalah **Operator/Admin** dengan karakteristik sebagai berikut:
*   **Tingkat Keahlian Teknis:** Menengah. Mahir menggunakan aplikasi perkantoran (Excel) dan aplikasi web, namun tidak memiliki pengetahuan pemrograman.
*   **Tugas Utama:** Melakukan entri data, verifikasi, dan pelaporan.
*   **Kebutuhan:** Membutuhkan antarmuka yang intuitif, cepat, dan dapat diandalkan untuk mengurangi pekerjaan manual.

#### **2.4. Batasan Umum**
*   Aplikasi ini adalah prototipe dan tidak dimaksudkan untuk digunakan di lingkungan produksi dengan data nyata.
*   Integrasi dengan sistem pemerintah dilakukan melalui simulasi, bukan koneksi API langsung.
*   Aplikasi akan dikembangkan sebagai aplikasi web dan diakses melalui browser modern (Chrome, Firefox).
*   Bahasa yang digunakan dalam antarmuka adalah Bahasa Indonesia.

### **3. Persyaratan Fungsional Spesifik**

#### **3.1. Autentikasi Pengguna (FUNC-AUTH)**

*   **REQ-AUTH-001:** Sistem harus menyediakan halaman login dengan field untuk `username` dan `password`.
*   **REQ-AUTH-002:** Sistem harus memvalidasi kredensial pengguna terhadap data yang tersimpan di database.
*   **REQ-AUTH-003:** Kata sandi pengguna harus disimpan dalam format ter-hash (misalnya menggunakan bcrypt) di database.
*   **REQ-AUTH-004:** Setelah berhasil login, pengguna akan diarahkan ke halaman Dashboard.
*   **REQ-AUTH-005:** Sistem harus menyediakan fungsionalitas logout yang akan mengakhiri sesi pengguna.
*   **REQ-AUTH-006:** Halaman-halaman selain halaman login harus dilindungi dan hanya dapat diakses oleh pengguna yang sudah login.

#### **3.2. Dashboard (FUNC-DASH)**

*   **REQ-DASH-001:** Halaman Dashboard harus menampilkan ringkasan statistik dalam bentuk kartu informasi.
*   **REQ-DASH-002:** Kartu statistik yang harus ditampilkan adalah:
    *   Total Siswa Terdaftar (jumlah semua siswa di database)
    *   Siswa Diterima (jumlah siswa dengan `statusPenerimaan` = 'Diterima')
    *   Siswa Ditolak (jumlah siswa dengan `statusPenerimaan` = 'Ditolak')
    *   Dalam Proses (jumlah siswa dengan `statusPenerimaan` = 'Dalam Proses')
*   **REQ-DASH-003:** Data statistik pada dashboard harus diperbarui secara real-time atau dengan mekanisme refresh manual.

#### **3.3. Manajemen Data Siswa (FUNC-SISWA)**

*   **REQ-SISWA-001: Import Data Massal**
    *   Sistem harus menyediakan antarmuka untuk mengunggah file.
    *   Format file yang didukung: `.csv`, `.xls`, `.xlsx`.
    *   Struktur kolom wajib dalam file: `NIK`, `NISN`, `NAMA_LENGKAP`, `TANGGAL_LAHIR`, `NAMA_IBU_KANDUNG`, `NPSN_SEKOLAH_TUJUAN`.
    *   Sistem harus memvalidasi header kolom file. Jika tidak sesuai, proses dibatalkan dengan pesan error.
    *   Sistem harus dapat memproses file yang berisi hingga 1000 baris data.
    *   Sistem harus menangani NIK duplikat: jika NIK yang diimpor sudah ada di database, baris tersebut akan dilewati dan dilaporkan sebagai gagal.
    *   Untuk setiap baris yang berhasil diimpor, sistem harus menjalankan proses verifikasi otomatis (lihat REQ-VER-001).

*   **REQ-SISWA-002: Tampilan Data**
    *   Semua data siswa yang tersimpan harus ditampilkan dalam format tabel yang mendukung paginasi.
    *   Kolom yang ditampilkan: `Nama Lengkap`, `NIK`, `Sekolah Tujuan`, `Status Verifikasi Dukcapil`, `Status Verifikasi DTKS`, `Kategori Afirmasi`, `Status Penerimaan`.
    *   Kolom status harus diberi kode warna untuk identifikasi visual yang mudah.

*   **REQ-SISWA-003: Pencarian dan Filter**
    *   Sistem harus menyediakan input teks untuk mencari siswa berdasarkan `Nama Lengkap` atau `NIK`. Pencarian harus bersifat *case-insensitive*.
    *   Sistem harus menyediakan dropdown untuk memfilter data berdasarkan `Kategori Afirmasi` dan `Status Penerimaan`.

*   **REQ-SISWA-004: Manajemen Manual**
    *   Sistem harus menyediakan fungsionalitas untuk menambah data siswa baru melalui formulir web.
    *   Sistem harus memungkinkan admin untuk mengedit data siswa yang sudah ada.
    *   Admin harus dapat mengubah `Status Penerimaan` (`Diterima`/`Ditolak`) untuk setiap siswa. Perubahan ini harus secara otomatis memperbarui `Kuota Terpakai` di sekolah terkait.

#### **3.4. Proses Verifikasi (Simulasi) (FUNC-VER)**

*   **REQ-VER-001:** Proses ini harus berjalan secara otomatis setiap kali data siswa baru ditambahkan (baik melalui import maupun formulir).
*   **REQ-VER-002:** Sistem akan memuat data dari tiga file dummy (`dukcapil_dummy.csv`, `dtks_dummy.csv`, `dapodik_dummy.csv`) ke dalam memori server saat startup untuk pencarian yang cepat.
*   **REQ-VER-003: Logika Verifikasi Dukcapil**
    *   Input: `NIK`, `NAMA_LENGKAP`, `TANGGAL_LAHIR`.
    *   Output: `statusDukcapil` ('Padan', 'Tidak Ditemukan', 'Data Tidak Cocok').
    *   Proses: Mencari NIK di data dummy Dukcapil. Jika ditemukan, bandingkan nama dan tanggal lahir.
*   **REQ-VER-004: Logika Verifikasi DTKS**
    *   Input: `NIK`.
    *   Output: `statusDtks` ('Terdaftar', 'Tidak Terdaftar').
    *   Proses: Mencari NIK di data dummy DTKS.
*   **REQ-VER-005: Logika Kategorisasi**
    *   Input: Hasil verifikasi `statusDtks` dan data `KEBUTUHAN_KHUSUS` dari data dummy Dapodik.
    *   Output: `kategoriAfirmasi`.
    *   Proses: Jika `statusDtks` adalah 'Terdaftar', `kategoriAfirmasi` = 'Keluarga Tidak Mampu (DTKS)'. Jika siswa memiliki `KEBUTUHAN_KHUSUS`, `kategoriAfirmasi` = 'Penyandang Disabilitas'.

#### **3.5. Manajemen Kuota Sekolah (FUNC-SEKOLAH)**

*   **REQ-SEKOLAH-001:** Sistem harus menyediakan halaman untuk menampilkan semua data sekolah dalam tabel.
*   **REQ-SEKOLAH-002:** Admin harus dapat melakukan operasi CRUD (Create, Read, Update, Delete) pada data sekolah.
*   **REQ-SEKOLAH-003:** Setiap entri sekolah harus memiliki atribut: `NPSN` (unik), `Nama Sekolah`, `Alamat`, `Kuota Afirmasi`.
*   **REQ-SEKOLAH-004:** Sistem harus secara otomatis menghitung dan menampilkan kolom `Kuota Terpakai`. Nilai ini adalah `COUNT(*)` dari siswa dengan `idSekolah` yang cocok dan `statusPenerimaan` = 'Diterima'.

### **4. Persyaratan Antarmuka Eksternal**

#### **4.1. Antarmuka Pengguna (UI)**
*   Aplikasi harus memiliki tata letak yang konsisten di semua halaman.
*   Navigasi utama harus menggunakan *sidebar* yang persisten.
*   Aplikasi harus menggunakan desain yang bersih dan profesional, dengan *feedback* visual untuk aksi pengguna (misalnya, *loading spinner*, notifikasi *toast*).
*   Aplikasi harus responsif dan dapat digunakan dengan baik pada resolusi desktop standar (minimal 1366x768).

#### **4.2. Antarmuka Perangkat Keras**
Tidak ada persyaratan antarmuka perangkat keras spesifik untuk aplikasi ini.

#### **4.3. Antarmuka Perangkat Lunak**
*   **Backend:** Node.js, Express.js.
*   **Frontend:** React.js.
*   **Database:** MongoDB.
*   **Browser:** Aplikasi harus kompatibel dengan versi terbaru dari Google Chrome dan Mozilla Firefox.
*   **Simulasi API:** Sistem akan berinteraksi dengan file `.csv` yang disimpan secara lokal di server untuk mensimulasikan koneksi data eksternal.

### **5. Persyaratan Non-Fungsional**

#### **5.1. Kinerja**
*   **REQ-PERF-001:** Waktu respons UI untuk aksi umum (membuka halaman, memfilter data) harus kurang dari 2 detik.
*   **REQ-PERF-002:** Proses import dan verifikasi 500 baris data dari file Excel/CSV harus selesai dalam waktu kurang dari 60 detik.

#### **5.2. Keamanan**
*   **REQ-SEC-001:** Semua data sensitif, terutama kata sandi, harus di-hash sebelum disimpan ke database.
*   **REQ-SEC-002:** Sistem harus dilindungi dari serangan umum seperti *Cross-Site Scripting (XSS)* dengan melakukan sanitasi input pengguna.

#### **5.3. Keandalan (Reliability)**
*   Aplikasi harus memiliki *uptime* yang tinggi dalam lingkungan development/staging.
*   Sistem harus dapat menangani kesalahan input dengan baik (misalnya, format file yang salah, data yang tidak lengkap) dan memberikan pesan error yang informatif kepada pengguna.

#### **5.4. Keterpeliharaan (Maintainability)**
*   Kode sumber harus terstruktur dengan baik, mengikuti praktik terbaik (misalnya, memisahkan *controller*, *model*, dan *service* di backend).
*   Kode harus diberi komentar yang memadai, terutama pada bagian logika bisnis yang kompleks seperti proses verifikasi.

### **6. Apendiks**

#### **A. Model Data (Skema Database MongoDB)**

**Koleksi `Siswa`:**
```json
{
  "_id": ObjectId,
  "nik": { "type": String, "required": true, "unique": true },
  "nisn": { "type": String, "required": true },
  "namaLengkap": { "type": String, "required": true },
  "tanggalLahir": { "type": Date, "required": true },
  "namaIbuKandung": { "type": String, "required": true },
  "sekolahTujuan": { "type": ObjectId, "ref": "Sekolah", "required": true },
  "statusVerifikasi": {
    "dukcapil": { "type": String, "enum": ["Padan", "Tidak Ditemukan", "Data Tidak Cocok"], "default": "Belum Diverifikasi" },
    "dtks": { "type": String, "enum": ["Terdaftar", "Tidak Terdaftar"], "default": "Belum Diverifikasi" }
  },
  "kategoriAfirmasi": { "type": String, "default": "Belum Dikategorikan" },
  "statusPenerimaan": { "type": String, "enum": ["Dalam Proses", "Diterima", "Ditolak"], "default": "Dalam Proses" },
  "createdAt": { "type": Date, "default": Date.now }
}
```

**Koleksi `Sekolah`:**
```json
{
  "_id": ObjectId,
  "npsn": { "type": String, "required": true, "unique": true },
  "namaSekolah": { "type": String, "required": true },
  "alamat": { "type": String },
  "kuotaAfirmasi": { "type": Number, "default": 0 }
}
```

**Koleksi `Pengguna`:**
```json
{
  "_id": ObjectId,
  "username": { "type": String, "required": true, "unique": true },
  "password": { "type": String, "required": true }
}
```
---