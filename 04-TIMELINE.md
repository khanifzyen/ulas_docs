### **Checklist & Timeline Proyek: Prototipe Aplikasi ULAS (Total: 6 Minggu)**

#### **Sprint 0: Persiapan (Minggu ke-0)**
*Tujuan: Memastikan semua fondasi, alat, dan pemahaman siap sebelum sprint pertama dimulai.*

- **[ ] Hari -2:** **Finalisasi Dokumen:**
    - [ ] Review dan setujui PRD, SRS, dan SDD.
    - [ ] Pastikan semua anggota tim memahami lingkup proyek.
- **[ ] Hari -1:** **Setup Lingkungan & Tools:**
    - [ ] Buat repositori Git (misalnya di GitHub/GitLab).
    - [ ] Setup *project board* (Trello, Jira, atau GitHub Projects) dengan backlog dari checklist di bawah ini.
    - [ ] Pastikan semua pengembang memiliki Node.js, npm/yarn, MongoDB, dan Git terinstal.
    - [ ] Buat file data dummy (`dukcapil.csv`, `dtks.csv`, `dapodik.csv`) dan letakkan di repositori.

---

### **Sprint 1: Fondasi Backend & UI Shell (Minggu 1-2)**
*Tujuan Sprint: Membangun tulang punggung backend yang fungsional dan kerangka (shell) frontend yang siap diisi dengan logika.*

| Hari | Tugas | Status |
| :--- | :--- | :--- |
| **Minggu 1** | **Fokus: Backend Setup & API Dasar** | |
| **Senin (Hari 1)** | **Backend: Inisialisasi & Database** | |
| | `[ ]` Inisialisasi proyek Node.js & Express.js. | ☐ |
| | `[ ]` Setup struktur folder (models, routes, controllers). | ☐ |
| | `[ ]` Buat koneksi ke database MongoDB (lokal/Atlas). | ☐ |
| | `[ ]` Buat model Mongoose untuk `Pengguna`, `Sekolah`. | ☐ |
| **Selasa (Hari 2)** | **Backend: Autentikasi** | |
| | `[ ]` Implementasi hashing password (bcrypt). | ☐ |
| | `[ ]` Buat endpoint `POST /api/auth/login` dengan logika JWT. | ☐ |
| | `[ ]` Buat middleware `authMiddleware` untuk proteksi route. | ☐ |
| **Rabu (Hari 3)** | **Backend: CRUD Sekolah** | |
| | `[ ]` Buat endpoint CRUD lengkap untuk `/api/sekolah`. | ☐ |
| | `[ ]` Buat controller dan logika untuk manajemen sekolah. | ☐ |
| **Kamis (Hari 4)** | **Frontend: Setup & Kerangka UI** | |
| | `[ ]` Inisialisasi proyek React.js (`create-react-app`). | ☐ |
| | `[ ]` Install `axios`, `react-router-dom`, dan library UI (Material-UI/Ant Design). | ☐ |
| | `[ ]` Buat struktur folder (components, pages, services). | ☐ |
| **Jumat (Hari 5)** | **Frontend: Layout & Routing** | |
| | `[ ]` Buat komponen `Layout` (Sidebar, Header). | ☐ |
| | `[ ]` Setup routing untuk semua halaman (Login, Dashboard, Siswa, Sekolah). | ☐ |
| | `[ ]` Buat halaman placeholder untuk setiap route. | ☐ |
| | **Sprint Review Mingguan #1** | |
| **Minggu 2** | **Fokus: Integrasi Awal & UI Fungsional** | |
| **Senin (Hari 6)** | **Frontend: Halaman Login & Autentikasi** | |
| | `[ ]` Buat UI untuk halaman login. | ☐ |
| | `[ ]` Hubungkan form login ke endpoint `/api/auth/login`. | ☐ |
| | `[ ]` Implementasi penyimpanan token JWT di client & proteksi route. | ☐ |
| **Selasa (Hari 7)** | **Frontend: Halaman Kuota Sekolah** | |
| | `[ ]` Buat tabel untuk menampilkan data sekolah. | ☐ |
| | `[ ]` Hubungkan tabel ke endpoint `GET /api/sekolah`. | ☐ |
| | `[ ]` Buat modal/form untuk menambah/mengedit sekolah. | ☐ |
| **Rabu (Hari 8)** | **Frontend: Halaman Dashboard** | |
| | `[ ]` Buat komponen `StatCard`. | ☐ |
| | `[ ]` Buat endpoint `GET /api/dashboard/stats` di backend. | ☐ |
| | `[ ]` Hubungkan halaman Dashboard untuk menampilkan data statistik. | ☐ |
| **Kamis (Hari 9)** | **Backend: Persiapan Modul Import** | |
| | `[ ]` Buat model Mongoose untuk `Siswa`. | ☐ |
| | `[ ]` Buat service `VerificationService` (kosong) & struktur dasar controller `SiswaController`. | ☐ |
| | `[ ]` Buat logika untuk memuat data dummy CSV ke memori server saat startup. | ☐ |
| **Jumat (Hari 10)**| **Refactoring & Demo Sprint 1** | |
| | `[ ]` Bersihkan kode, tambahkan komentar. | ☐ |
| | `[ ]` Persiapkan demo untuk Sprint Review. | ☐ |
| | **Sprint Review & Retrospective #1** | ☐ |

---

### **Sprint 2: Fitur Inti - Import & Verifikasi (Minggu 3-4)**
*Tujuan Sprint: Mengimplementasikan fitur paling krusial dari aplikasi, yaitu import data massal dan proses verifikasi otomatis.*

| Hari | Tugas | Status |
| :--- | :--- | :--- |
| **Minggu 3** | **Fokus: Backend Logic untuk Import & Verifikasi** | |
| **Senin (Hari 11)**| **Backend: Endpoint Upload** | |
| | `[ ]` Implementasi `multer` untuk menangani upload file. | ☐ |
| | `[ ]` Buat endpoint `POST /api/siswa/import` yang menerima file. | ☐ |
| | `[ ]` Implementasi `sheetjs` untuk membaca dan mem-parsing file CSV/Excel. | ☐ |
| **Selasa (Hari 12)**| **Backend: Logika Verifikasi Dukcapil & DTKS** | |
| | `[ ]` Di `VerificationService`, implementasikan fungsi verifikasi Dukcapil (simulasi). | ☐ |
| | `[ ]` Di `VerificationService`, implementasikan fungsi verifikasi DTKS (simulasi). | ☐ |
| **Rabu (Hari 13)**| **Backend: Logika Kategorisasi & Penyimpanan** | |
| | `[ ]` Di `VerificationService`, implementasikan fungsi kategorisasi otomatis. | ☐ |
| | `[ ]` Gabungkan semua logika: loop data, verifikasi, kategorisasi, lalu simpan ke DB. | ☐ |
| **Kamis (Hari 14)**| **Backend: Penanganan Error & Respon** | |
| | `[ ]` Implementasi penanganan error (NIK duplikat, format salah). | ☐ |
| | `[ ]` Format respons API untuk memberikan ringkasan hasil import (berhasil, gagal). | ☐ |
| **Jumat (Hari 15)**| **Testing API & Sprint Review Mingguan #2** | |
| | `[ ]` Lakukan pengujian endpoint import menggunakan Postman/Insomnia. | ☐ |
| | `[ ]` Pastikan semua skenario (sukses, gagal) berfungsi sesuai harapan. | ☐ |
| | **Sprint Review Mingguan #2** | |
| **Minggu 4** | **Fokus: Frontend untuk Import & Menampilkan Hasil** | |
| **Senin (Hari 16)**| **Frontend: Komponen Upload** | |
| | `[ ]` Buat komponen `FileUploadModal`. | ☐ |
| | `[ ]` Tambahkan tombol "Import Siswa" di `SiswaPage` untuk membuka modal. | ☐ |
| **Selasa (Hari 17)**| **Frontend: Menghubungkan Upload ke API** | |
| | `[ ]` Hubungkan komponen upload ke endpoint `POST /api/siswa/import`. | ☐ |
| | `[ ]` Implementasi state loading selama proses upload. | ☐ |
| **Rabu (Hari 18)**| **Frontend: Halaman Data Siswa** | |
| | `[ ]` Buat komponen `SiswaTable` dengan kolom yang sesuai. | ☐ |
| | `[ ]` Tampilkan status verifikasi dengan kode warna/ikon. | ☐ |
| **Kamis (Hari 19)**| **Frontend: Fungsionalitas Tabel Siswa** | |
| | `[ ]` Implementasi fitur pencarian dan filter di `SiswaTable`. | ☐ |
| | `[ ]` Buat fungsi untuk mengubah `Status Penerimaan` siswa. | ☐ |
| **Jumat (Hari 20)**| **Refactoring & Demo Sprint 2** | |
| | `[ ]` Pastikan UI/UX alur import sudah mulus. | ☐ |
| | `[ ]` Persiapkan demo untuk Sprint Review. | ☐ |
| | **Sprint Review & Retrospective #2** | ☐ |

---

### **Sprint 3: Penyempurnaan, Laporan & Deployment (Minggu 5-6)**
*Tujuan Sprint: Menyelesaikan fitur-fitur pendukung, melakukan pengujian menyeluruh, dan men-deploy prototipe ke lingkungan staging.*

| Hari | Tugas | Status |
| :--- | :--- | :--- |
| **Minggu 5** | **Fokus: Fitur Tambahan & Pengujian** | |
| **Senin (Hari 21)**| **Fitur: Form Input Manual** | |
| | `[ ]` Buat form untuk menambah/mengedit data siswa secara manual. | ☐ |
| | `[ ]` Hubungkan form ke endpoint `POST /api/siswa` dan `PUT /api/siswa/:id`. | ☐ |
| **Selasa (Hari 22)**| **Fitur: Template & Ekspor** | |
| | `[ ]` Buat endpoint untuk mengunduh template Excel/CSV. | ☐ |
| | `[ ]` Buat endpoint untuk mengekspor data siswa yang sudah diverifikasi ke CSV. | ☐ |
| **Rabu (Hari 23)**| **Pengujian End-to-End (Manual)** | |
| | `[ ]` Tes alur lengkap: Login -> Import -> Verifikasi -> Lihat Hasil -> Edit -> Logout. | ☐ |
| | `[ ]` Tes semua skenario error (file salah, data tidak lengkap). | ☐ |
| **Kamis (Hari 24)**| **Perbaikan Bug & UI Polish** | |
| | `[ ]` Perbaiki bug yang ditemukan saat pengujian. | ☐ |
| | `[ ]` Sempurnakan UI: tambahkan notifikasi, pesan error yang lebih baik, konsistensi desain. | ☐ |
| **Jumat (Hari 25)**| **Persiapan Deployment & Sprint Review Mingguan #3** | |
| | `[ ]` Siapkan environment variables untuk produksi. | ☐ |
| | `[ ]` Buat script build untuk frontend dan backend. | ☐ |
| | **Sprint Review Mingguan #3** | |
| **Minggu 6** | **Fokus: Deployment & Finalisasi** | |
| **Senin (Hari 26)**| **Deployment: Database & Backend** | |
| | `[ ]` Setup database di MongoDB Atlas. | ☐ |
| | `[ ]` Deploy aplikasi backend ke Heroku atau platform serupa. | ☐ |
| **Selasa (Hari 27)**| **Deployment: Frontend** | |
| | `[ ]` Deploy aplikasi frontend ke Vercel/Netlify. | ☐ |
| | `[ ]` Konfigurasi koneksi antara frontend dan backend di lingkungan produksi. | ☐ |
| **Rabu (Hari 28)**| **Pengujian di Lingkungan Staging** | |
| | `[ ]` Lakukan pengujian akhir pada aplikasi yang sudah di-deploy. | ☐ |
| | `[ ]` Pastikan semua fungsionalitas berjalan dengan baik. | ☐ |
| **Kamis (Hari 29)**| **Dokumentasi & Penyerahan** | |
| | `[ ]` Buat `README.md` yang jelas tentang cara menjalankan proyek. | ☐ |
| | `[ ]` Siapkan materi presentasi/demo akhir. | ☐ |
| **Jumat (Hari 30)**| **Demo Akhir Proyek** | |
| | `[ ]` Lakukan demo akhir kepada pemangku kepentingan. | ☐ |
| | `[ ]` Kumpulkan umpan balik untuk pengembangan selanjutnya. | ☐ |
| | **Project Retrospective & Closing** | ☐ |