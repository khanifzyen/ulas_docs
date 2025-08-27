### **Software Design Document (SDD): Prototipe Aplikasi ULAS v1.0**

| **Dokumen** | SDD - Prototipe Aplikasi ULAS |
| :--- | :--- |
| **Versi** | 1.0 |
| **Tanggal** | 26 Agustus 2025 |
| **Penulis** | Akhmad Khanif Zyen |
| **Status** | **Draft** |

### **1. Pendahuluan**

#### **1.1. Tujuan Dokumen**
Tujuan dari dokumen ini adalah untuk menyediakan desain arsitektur dan teknis yang detail untuk implementasi Prototipe Aplikasi ULAS v1.0. Dokumen ini akan menjadi referensi utama bagi para pengembang selama fase konstruksi perangkat lunak, menjelaskan bagaimana persyaratan yang didefinisikan dalam SRS v1.0 akan diwujudkan secara teknis.

#### **1.2. Lingkup Desain**
Desain ini mencakup arsitektur sistem secara keseluruhan, desain backend (termasuk API dan logika bisnis), desain frontend (struktur komponen dan alur pengguna), desain database, serta detail implementasi modul-modul kritis seperti modul import data dan simulasi verifikasi.

#### **1.3. Definisi, Akronim, dan Singkatan**
(Sama seperti dokumen SRS)

#### **1.4. Referensi**
*   Dokumen PRD - Prototipe Aplikasi ULAS v1.0
*   Dokumen SRS - Prototipe Aplikasi ULAS v1.0

### **2. Tinjauan Sistem**

#### **2.1. Arsitektur Sistem**
Sistem akan dibangun menggunakan **Arsitektur 3-Tier (Three-Tier Architecture)** yang memisahkan presentasi (klien), logika bisnis (server), dan penyimpanan data (database). Arsitektur ini memfasilitasi pengembangan, pemeliharaan, dan skalabilitas yang lebih baik.

```
+----------------+      HTTP/REST API      +-----------------+      DB Protocol      +---------------+
|                | <--------------------> |                 | <-----------------> |               |
|  Frontend      |                        |  Backend Server |                     |   Database    |
|  (React.js)    |                        |  (Node.js)      |                     |   (MongoDB)   |
|  (Client Tier) |                        |  (Logic Tier)   |                     |   (Data Tier) |
+----------------+                        +-----------------+                     +---------------+
```

*   **Client Tier (Frontend):** Aplikasi *Single Page Application* (SPA) yang dibangun menggunakan React.js. Bertanggung jawab untuk rendering UI, menangani interaksi pengguna, dan berkomunikasi dengan backend melalui REST API.
*   **Logic Tier (Backend):** Server yang dibangun menggunakan Node.js dan Express.js. Bertanggung jawab untuk menangani permintaan API, autentikasi, logika bisnis inti (verifikasi data), dan interaksi dengan database.
*   **Data Tier (Database):** Database NoSQL MongoDB yang bertanggung jawab untuk menyimpan semua data aplikasi secara persisten.

### **3. Desain Arsitektur**

#### **3.1. Desain Backend (Server-Side)**
Backend akan distrukturkan mengikuti pola desain **Model-Route-Controller (MRC)** untuk memisahkan tanggung jawab.

*   **Models:** Mendefinisikan skema data untuk MongoDB menggunakan Mongoose. Ini adalah representasi data aplikasi (Siswa, Sekolah, Pengguna).
*   **Routes:** Mendefinisikan endpoint API (misalnya, `/api/siswa`, `/api/auth`) dan mengarahkan permintaan HTTP ke *controller* yang sesuai.
*   **Controllers:** Berisi logika utama untuk menangani permintaan. *Controller* akan memproses input, memanggil *service* (jika ada), berinteraksi dengan *model*, dan mengirimkan respons kembali ke klien.

**Struktur Folder Backend:**
```
/server
├── /config         // Koneksi DB, variabel lingkungan
├── /controllers    // Logika request/response (siswaController.js)
├── /middleware     // Middleware (authMiddleware.js)
├── /models         // Skema Mongoose (siswaModel.js)
├── /routes         // Definisi endpoint API (siswaRoutes.js)
├── /services       // Logika bisnis kompleks (verificationService.js)
├── /dummy_data     // File CSV untuk simulasi
└── server.js       // Entry point aplikasi backend
```

#### **3.2. Desain Frontend (Client-Side)**
Frontend akan dibangun dengan **Arsitektur Berbasis Komponen (Component-Based Architecture)** menggunakan React.js.

*   **Struktur Halaman (Views/Pages):** Setiap halaman utama akan menjadi komponen tersendiri.
    *   `LoginPage.js`: Halaman untuk login pengguna.
    *   `DashboardPage.js`: Halaman utama setelah login, menampilkan statistik.
    *   `SiswaPage.js`: Halaman untuk menampilkan dan mengelola data siswa.
    *   `SekolahPage.js`: Halaman untuk mengelola kuota sekolah.
    *   `Layout.js`: Komponen utama yang berisi elemen persisten seperti Sidebar dan Header.
*   **Komponen yang Dapat Digunakan Kembali (Reusable Components):**
    *   `Sidebar.js`: Komponen navigasi.
    *   `SiswaTable.js`: Tabel data yang mendukung paginasi, pencarian, dan filter.
    *   `FileUploadModal.js`: Modal untuk mengunggah file.
    *   `StatCard.js`: Kartu untuk menampilkan statistik di dashboard.
*   **Manajemen State:** Untuk prototipe ini, **React Context API** akan digunakan untuk manajemen state global sederhana seperti data pengguna yang login. State lokal akan dikelola oleh masing-masing komponen menggunakan `useState` dan `useEffect`.
*   **Routing:** `react-router-dom` akan digunakan untuk menangani navigasi antar halaman di sisi klien.

#### **3.3. Desain Database**
Database akan menggunakan MongoDB. Desain skema akan mengikuti spesifikasi yang telah ditetapkan dalam SRS.

*   **Koleksi `Siswa`:** Kunci utama adalah `nik`. Kolom `nik` akan diindeks (`unique: true`) untuk memastikan keunikan dan mempercepat operasi pencarian.
*   **Koleksi `Sekolah`:** Kunci utama adalah `npsn`. Kolom `npsn` akan diindeks (`unique: true`).
*   **Koleksi `Pengguna`:** Kunci utama adalah `username`. Kolom `username` akan diindeks (`unique: true`).
*   **Relasi:** Relasi antara `Siswa` dan `Sekolah` akan diimplementasikan menggunakan referensi `ObjectId`. (`siswa.sekolahTujuan` akan menyimpan `_id` dari dokumen di koleksi `Sekolah`).

### **4. Desain Komponen Detail**

#### **4.1. Modul Import & Verifikasi Data (Inti)**
Ini adalah modul paling kompleks. Alur kerjanya akan diimplementasikan di `verificationService.js` di backend.

**Diagram Alur Proses:**
```
[Start] --> [User Uploads File (CSV/XLSX)] --> [API Endpoint: /api/siswa/import]
   |
   V
[Server receives file via Multer] --> [Parse file content using SheetJS]
   |
   V
[Loop for each row in file]
   |
   +-----> [Validate row structure (NIK exists?)] --(No)--> [Log error, skip row]
   |          |
 (Yes)        |
   |          V
   +-----> [Check for NIK duplicate in DB] --(Yes)--> [Log error, skip row]
   |          |
 (No)         |
   |          V
   +-----> [Perform Dukcapil Verification (Simulated)]
   |          |
   |          V
   +-----> [Perform DTKS Verification (Simulated)]
   |          |
   |          V
   +-----> [Perform Dapodik Lookup (Simulated)]
   |          |
   |          V
   +-----> [Determine Kategori Afirmasi]
   |          |
   |          V
   +-----> [Create Siswa document]
   |          |
   |          V
   +-----> [Save document to MongoDB]
   |
[End Loop] --> [Compile summary report (success/fail count)]
   |
   V
[Send response (JSON) to Client] --> [End]
```

#### **4.2. Mekanisme Simulasi API**
*   **Strategi:** Untuk menghindari pembacaan file berulang kali yang tidak efisien, data dari `dukcapil_dummy.csv`, `dtks_dummy.csv`, dan `dapodik_dummy.csv` akan **dimuat ke dalam memori server saat aplikasi pertama kali dimulai**.
*   **Implementasi:** Data akan disimpan dalam struktur data **Map** di JavaScript (`new Map()`), di mana *key* adalah `NIK` dan *value* adalah objek yang berisi sisa data dari baris tersebut. Ini memungkinkan pencarian data (lookup) dengan kompleksitas waktu **O(1)**, yang sangat cepat.

#### **4.3. Modul Autentikasi**
*   **Mekanisme:** Menggunakan **JSON Web Tokens (JWT)** untuk autentikasi berbasis token.
*   **Alur Login:**
    1.  Pengguna mengirim `username` dan `password` ke endpoint `POST /api/auth/login`.
    2.  Server memvalidasi kredensial.
    3.  Jika valid, server membuat JWT yang berisi `userId` dan `role`, menandatanganinya dengan *secret key*, dan mengirimkannya kembali ke klien.
*   **Alur Permintaan Terproteksi:**
    1.  Klien menyimpan JWT (misalnya di `localStorage` atau `cookie`).
    2.  Untuk setiap permintaan ke endpoint yang terproteksi, klien menyertakan JWT dalam *header* `Authorization` (misalnya: `Authorization: Bearer <token>`).
    3.  Sebuah *middleware* di backend akan memverifikasi token ini sebelum meneruskan permintaan ke *controller*. Jika token tidak valid atau tidak ada, permintaan ditolak dengan status `401 Unauthorized`.

### **5. Desain Data dan API**

#### **5.1. Model Data**
(Skema MongoDB yang didefinisikan dalam SRS Apendiks A akan digunakan sebagai model data formal).

#### **5.2. Spesifikasi API (Endpoint)**
Berikut adalah spesifikasi untuk REST API yang akan dibangun:

| **Fungsi** | **Metode** | **Endpoint** | **Deskripsi** | **Contoh Body Request/Response** |
| :--- | :--- | :--- | :--- | :--- |
| Login Pengguna | POST | `/api/auth/login` | Mengautentikasi pengguna dan mengembalikan JWT. | Req: `{ "username": "...", "password": "..." }` |
| Import Siswa | POST | `/api/siswa/import` | Menerima file, memproses, dan menyimpan data siswa. | Req: `FormData` dengan file |
| Dapatkan Semua Siswa | GET | `/api/siswa` | Mengambil daftar semua siswa dengan paginasi & filter. | Res: `[{...siswa}, ...]` |
| Tambah Siswa | POST | `/api/siswa` | Menambah satu siswa baru melalui formulir. | Req: `{...data_siswa}` |
| Update Siswa | PUT | `/api/siswa/:id` | Mengupdate data siswa, terutama `statusPenerimaan`. | Req: `{ "statusPenerimaan": "Diterima" }` |
| Dapatkan Statistik | GET | `/api/dashboard/stats`| Mengambil data ringkasan untuk dashboard. | Res: `{ "total": 150, "diterima": 100, ...}` |
| CRUD Sekolah | GET, POST, PUT, DELETE | `/api/sekolah` & `/api/sekolah/:id`| Operasi CRUD untuk data sekolah dan kuota. | - |

### **6. Desain Antarmuka Pengguna (UI/UX)**

*   **Tata Letak Umum:**
    *   **Sidebar Kiri:** Tautan navigasi ke Dashboard, Data Siswa, Kuota Sekolah, dan tombol Logout.
    *   **Header Atas:** Menampilkan nama halaman saat ini dan informasi pengguna yang login.
    *   **Area Konten Utama:** Tempat komponen halaman dirender.
*   **Alur Pengguna Utama (Import Data):**
    1.  Pengguna login, mendarat di **Dashboard**.
    2.  Pengguna menavigasi ke **Data Siswa** melalui sidebar.
    3.  Pengguna mengklik tombol **"Import Siswa"**. Sebuah modal akan muncul.
    4.  Di dalam modal, pengguna mengklik area *drag-and-drop* atau tombol pilih file untuk memilih file dari komputernya.
    5.  Pengguna mengklik tombol **"Unggah"**. Modal menampilkan *loading spinner* dan menonaktifkan tombol.
    6.  Setelah proses selesai, modal ditutup, notifikasi *toast* muncul (misal: "Import Berhasil"), dan tabel data di halaman secara otomatis diperbarui dengan data baru.

### **7. Deployment**

*   **Lingkungan Pengembangan:**
    *   Backend: `nodemon` akan digunakan untuk *hot-reloading* server saat ada perubahan kode.
    *   Frontend: Server pengembangan React (`npm start`) akan digunakan.
*   **Deployment Prototipe:**
    *   Aplikasi dapat di-deploy ke platform seperti **Heroku** (untuk backend Node.js) dan **Vercel/Netlify** (untuk frontend React).
    *   Database dapat menggunakan layanan **MongoDB Atlas** (menyediakan *free tier* yang cukup untuk prototipe).

---