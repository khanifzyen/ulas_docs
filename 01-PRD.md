### **Product Requirements Document: Prototipe Aplikasi ULAS v1.0**

| **Dokumen** | PRD - Prototipe Aplikasi ULAS |
| :--- | :--- |
| **Versi** | 1.0 |
| **Tanggal** | 26 Agustus 2025 |
| **Penulis** | AKhmad Khanif Zyen |
| **Status** | **Draft** |

### **1. Pendahuluan dan Latar Belakang**

**1.1. Masalah:** Proses penerimaan siswa baru melalui Jalur Afirmasi saat ini belum optimal. Penyebab utamanya adalah data yang terfragmentasi antar instansi (Dinas Pendidikan, Dinas Sosial, Dukcapil), proses verifikasi yang manual dan lambat, serta potensi ketidakakuratan data. Hal ini menyebabkan operator administrasi menghabiskan banyak waktu untuk pekerjaan manual yang rentan kesalahan dan menghambat siswa yang berhak untuk mendapatkan akses pendidikan yang cepat dan adil.

**1.2. Solusi yang Diusulkan:** Membangun **ULAS (Unit Layanan Afirmasi Sekolah)**, sebuah sistem informasi terpusat yang mengotomatiskan proses pengumpulan, verifikasi, kategorisasi, dan pelaporan data siswa afirmasi.

**1.3. Tujuan Dokumen Ini:** Dokumen ini mendefinisikan persyaratan untuk **Prototipe Fungsional (Proof of Concept) v1.0** dari aplikasi ULAS. Prototipe ini bertujuan untuk memvalidasi alur kerja inti dari sistem, yaitu import data massal dan verifikasi otomatis, tanpa memerlukan integrasi API langsung ke sistem pemerintah.

### **2. Visi dan Tujuan Produk**

**2.1. Visi Produk:** Menjadi platform terpadu yang andal untuk memastikan proses seleksi siswa jalur afirmasi berjalan secara efisien, transparan, dan akurat, sehingga setiap anak yang berhak mendapatkan kesempatan pendidikan yang setara.

**2.2. Tujuan Prototipe v1.0:**
*   **Memvalidasi Alur Kerja Inti:** Membuktikan bahwa alur kerja "Import Data Massal -> Verifikasi Otomatis -> Kategorisasi -> Pelaporan" secara teknis layak dan efisien.
*   **Menyediakan Demo yang Tangibel:** Menciptakan produk yang dapat didemonstrasikan kepada pemangku kepentingan untuk mendapatkan umpan balik dan persetujuan untuk pengembangan skala penuh.
*   **Mengurangi Beban Kerja Admin:** Menunjukkan potensi pengurangan waktu dan usaha yang signifikan bagi operator dibandingkan dengan proses manual saat ini.
*   **Membangun Fondasi Teknis:** Menciptakan basis kode yang solid untuk pengembangan fitur-fitur yang lebih kompleks di masa depan.

### **3. Pengguna (User Persona)**

**Nama:** Budi Hartono
**Peran:** Operator/Admin di Cabang Dinas Pendidikan

*   **Latar Belakang:** Budi bertanggung jawab untuk mengelola data pendaftar siswa baru, khususnya dari jalur afirmasi di wilayahnya. Pekerjaannya saat ini melibatkan banyak sekali spreadsheet, dokumen fisik, dan komunikasi lintas dinas.
*   **Tujuan:**
    *   Memproses semua data pendaftar dengan cepat dan akurat sebelum batas waktu.
    *   Memastikan tidak ada siswa yang berhak yang terlewatkan.
    *   Menyiapkan laporan rekapitulasi untuk atasannya dengan mudah.
*   **Frustrasi (Poin Masalah):**
    *   "Saya lelah meng-copy-paste data dari satu Excel ke Excel lain."
    *   "Memverifikasi NIK satu per satu dengan mencocokkan ke data DTKS memakan waktu berhari-hari."
    *   "Sering terjadi salah ketik (human error) yang baru ketahuan di akhir."
*   **Bagaimana ULAS Membantu:** ULAS akan menjadi satu-satunya alat yang Budi butuhkan. Ia cukup mengunggah satu file, dan sistem akan melakukan semua pekerjaan verifikasi dan pelaporan dasar untuknya dalam hitungan menit.

### **4. Fitur dan Persyaratan Fungsional (User Stories)**

#### **4.1. Modul Utama: Manajemen Data Siswa**

*   **User Story 1: Import Data Massal**
    > **Sebagai** seorang Operator, **saya ingin** mengunggah file CSV atau Excel yang berisi ratusan data pendaftar siswa, **sehingga** saya tidak perlu memasukkan data satu per satu secara manual.

    **Persyaratan Fungsional:**
    *   Sistem harus menyediakan tombol "Import Data Siswa" yang jelas di halaman Data Siswa.
    *   Sistem harus menerima file dengan format `.csv`, `.xls`, dan `.xlsx`.
    *   File yang diunggah harus memiliki kolom wajib: `NIK`, `NISN`, `NAMA_LENGKAP`, `TANGGAL_LAHIR`, `NAMA_IBU_KANDUNG`, `NPSN_SEKOLAH_TUJUAN`.
    *   Sistem harus memberikan template file yang bisa diunduh oleh pengguna.
    *   Sistem harus menampilkan indikator loading selama proses import.
    *   Setelah selesai, sistem harus menampilkan notifikasi keberhasilan (misal: "Berhasil mengimpor 150 dari 152 data. 2 data gagal karena NIK duplikat.") dan secara otomatis memperbarui tabel data siswa.

*   **User Story 2: Verifikasi Otomatis (Simulasi)**
    > **Sebagai** seorang Operator, **saya ingin** sistem secara otomatis memvalidasi setiap siswa yang diimpor terhadap data Dukcapil, DTKS, dan Dapodik, **sehingga** saya bisa langsung melihat status kelayakan mereka tanpa pengecekan manual.

    **Persyaratan Fungsional:**
    *   Saat import, sistem akan melakukan "panggilan API palsu" dengan membaca 3 file data dummy (CSV) yang ada di server: `dukcapil_dummy.csv`, `dtks_dummy.csv`, `dapodik_dummy.csv`.
    *   **Logika Verifikasi Dukcapil:**
        *   Mencari NIK di `dukcapil_dummy.csv`.
        *   Jika tidak ditemukan, status verifikasi Dukcapil = "Tidak Ditemukan".
        *   Jika ditemukan, membandingkan `NAMA_LENGKAP` dan `TANGGAL_LAHIR` dari file import dengan data dummy. Jika cocok, status = "Padan". Jika tidak cocok, status = "Data Tidak Cocok".
    *   **Logika Verifikasi DTKS:**
        *   Mencari NIK di `dtks_dummy.csv`.
        *   Jika ditemukan, status verifikasi DTKS = "Terdaftar".
        *   Jika tidak ditemukan, status verifikasi DTKS = "Tidak Terdaftar".
    *   **Logika Kategorisasi Otomatis:**
        *   Jika status DTKS = "Terdaftar", maka `kategoriAfirmasi` siswa diatur menjadi "Keluarga Tidak Mampu (DTKS)".
        *   Jika ditemukan data `KEBUTUHAN_KHUSUS` dari `dapodik_dummy.csv`, maka `kategoriAfirmasi` siswa diatur menjadi "Penyandang Disabilitas". (Prioritas bisa diatur).
    *   Hasil verifikasi dan kategori harus disimpan di database untuk setiap siswa.

*   **User Story 3: Menambah Data Manual**
    > **Sebagai** seorang Operator, **saya ingin** bisa menambahkan data satu siswa melalui formulir, **untuk** menangani kasus pendaftaran susulan atau perbaikan data.

    **Persyaratan Fungsional:**
    *   Tersedia tombol "Tambah Siswa Baru".
    *   Menampilkan formulir dengan field yang sama seperti kolom import.
    *   Saat formulir disubmit, sistem menjalankan logika verifikasi otomatis yang sama seperti pada proses import.

*   **User Story 4: Melihat dan Mengelola Data Siswa**
    > **Sebagai** seorang Operator, **saya ingin** melihat semua data siswa dalam sebuah tabel yang informatif, **sehingga** saya bisa memfilter dan mencari data dengan mudah.

    **Persyaratan Fungsional:**
    *   Tabel harus menampilkan kolom: `Nama Lengkap`, `NIK`, `Sekolah Tujuan`, `Status Verifikasi` (Dukcapil, DTKS), `Kategori Afirmasi`, `Status Penerimaan`.
    *   Kolom `Status Verifikasi` harus menggunakan ikon atau label berwarna untuk kemudahan identifikasi (misal: Hijau untuk "Padan", Merah untuk "Tidak Ditemukan").
    *   Tersedia fitur pencarian berdasarkan Nama atau NIK.
    *   Tersedia fitur filter berdasarkan `Kategori Afirmasi` dan `Status Penerimaan`.
    *   Admin dapat mengubah `Status Penerimaan` secara manual (misal: dari "Dalam Proses" menjadi "Diterima" atau "Ditolak").

#### **4.2. Modul Lainnya**

*   **User Story 5: Dashboard Ringkasan**
    > **Sebagai** seorang Operator, **saya ingin** melihat ringkasan data statistik di halaman utama (dashboard), **sehingga** saya bisa mendapatkan gambaran cepat tentang progres penerimaan.

    **Persyaratan Fungsional:**
    *   Dashboard harus menampilkan kartu statistik:
        *   Total Siswa Pendaftar
        *   Jumlah Siswa Diterima
        *   Jumlah Siswa Ditolak
        *   Jumlah Siswa Dalam Proses
    *   Statistik ini harus ter-update secara real-time setiap kali ada perubahan data siswa.
    *   (Opsional) Menampilkan diagram lingkaran sederhana yang menunjukkan distribusi siswa per kategori afirmasi.

*   **User Story 6: Manajemen Kuota Sekolah**
    > **Sebagai** seorang Operator, **saya ingin** mengelola data sekolah dan kuota afirmasi mereka, **sehingga** sistem tahu daya tampung setiap sekolah.

    **Persyaratan Fungsional:**
    *   Halaman "Kuota Sekolah" untuk menambah, melihat, mengedit, dan menghapus data sekolah.
    *   Setiap entri sekolah harus memiliki `NPSN`, `Nama Sekolah`, dan `Kuota Afirmasi`.
    *   Sistem secara otomatis menghitung `Kuota Terpakai` berdasarkan jumlah siswa yang `Status Penerimaan`-nya "Diterima" di sekolah tersebut.

### **5. Arsitektur dan Tumpukan Teknologi (Tech Stack)**

*   **Backend:** Node.js dengan Express.js
*   **Frontend:** React.js
*   **Database:** MongoDB dengan Mongoose
*   **Pustaka Kunci:**
    *   **Backend:** `multer` (upload file), `sheetjs` (parsing Excel/CSV).
    *   **Frontend:** `axios` (HTTP client), `Material-UI` / `Ant Design` (Komponen UI).
*   **Simulasi API:** Data dummy akan disimpan dalam bentuk file `.csv` di sisi server dan akan dimuat ke dalam memori saat server dijalankan untuk proses verifikasi yang cepat.

### **6. Persyaratan Non-Fungsional**

*   **Kinerja:** Proses import dan verifikasi 500 data siswa harus selesai dalam waktu kurang dari 60 detik.
*   **Usability:** Antarmuka harus bersih, intuitif, dan mudah digunakan oleh pengguna non-teknis. Alur kerja utama (import) harus dapat diselesaikan dalam kurang dari 3 klik.
*   **Keamanan:** (Untuk prototipe) Akan ada sistem login sederhana. Kata sandi harus di-hash di database.
*   **Skalabilitas:** Meskipun prototipe, struktur kode dan database harus dirancang agar mudah dikembangkan ke versi produksi dengan integrasi API sungguhan.

### **7. Lingkup Proyek (Scope)**

**Termasuk dalam v1.0:**
*   Semua fitur yang dijelaskan dalam User Stories 1-6.
*   Sistem login dan logout sederhana untuk satu jenis peran (Admin).
*   Simulasi verifikasi data menggunakan file CSV dummy.

**Tidak Termasuk dalam v1.0 (Future Scope):**
*   Integrasi API langsung dengan Dukcapil, DTKS, dan Dapodik.
*   Manajemen pengguna dengan peran dan hak akses yang berbeda (Super Admin, Admin Wilayah, Admin Sekolah).
*   Modul Laporan yang kompleks dengan fitur ekspor ke PDF.
*   Fitur notifikasi ke siswa atau orang tua.
*   Desain responsif untuk perangkat mobile.

### **8. Metrik Keberhasilan Prototipe**

*   **Kuantitatif:**
    *   Waktu yang dibutuhkan untuk mengimpor dan memverifikasi 100 data siswa < 5 menit.
    *   Tingkat keberhasilan import data: > 95% data valid dalam file berhasil diproses.
*   **Kualitatif:**
    *   Mendapatkan umpan balik positif dari demo pengguna (misal: "Ini akan sangat membantu pekerjaan saya").
    *   Pemangku kepentingan setuju bahwa prototipe ini berhasil membuktikan kelayakan konsep dan memberikan lampu hijau untuk pengembangan selanjutnya.

### **9. Riwayat Perubahan Dokumen**

| Versi | Tanggal | Perubahan | Penulis |
| :--- | :--- | :--- | :--- |
| 1.0 | 26 Agustus 2025 | Versi awal dokumen dibuat. | Akhmad Khanif Zyen |

---