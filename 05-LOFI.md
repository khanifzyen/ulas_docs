### **Desain UI/UX Low-Fidelity: Prototipe Aplikasi ULAS**

#### **Tujuan Desain Lo-Fi:**
1.  **Memetakan Alur Pengguna (User Flow):** Memastikan pengguna dapat berpindah dari satu tugas ke tugas lain secara logis dan intuitif.
2.  **Menentukan Tata Letak (Layout):** Menempatkan elemen-elemen kunci seperti tombol, tabel, dan formulir di posisi yang strategis.
3.  **Memvalidasi Fungsionalitas:** Menggambarkan bagaimana fitur-fitur utama (seperti import dan filter) akan bekerja.

---

### **Halaman-Halaman Esensial yang Dibutuhkan:**

Berikut adalah daftar halaman dan komponen modal yang perlu kita desain dalam bentuk sketsa kasar (wireframe).

#### **1. Halaman Login (`/login`)**

Ini adalah gerbang masuk ke aplikasi. Desainnya harus minimalis dan langsung ke tujuan.

*   **Tujuan Halaman:** Mengautentikasi pengguna.
*   **Elemen Kunci:**
    1.  **[Logo Aplikasi]**: Logo ULAS (bisa berupa kotak dengan tulisan "ULAS").
    2.  **[Judul Halaman]**: Teks besar "Selamat Datang" atau "Login Admin".
    3.  **[Input Field: Username]**: Kotak input dengan label "Username".
    4.  **[Input Field: Password]**: Kotak input dengan label "Password".
    5.  **[Tombol Utama: Login]**: Tombol besar yang jelas dengan teks "Login".
    6.  **[Area Pesan Error]**: Tempat untuk menampilkan pesan seperti "Username atau password salah" (awalnya kosong).

**Sketsa Lo-Fi:**
```
+----------------------------------------+
|                                        |
|                [Logo]                  |
|                                        |
|           Selamat Datang               |
|                                        |
|   +---------------------------------+  |
|   | Username                        |  |
|   +---------------------------------+  |
|                                        |
|   +---------------------------------+  |
|   | Password                        |  |
|   +---------------------------------+  |
|                                        |
|   +---------------------------------+  |
|   |             LOGIN               |  |
|   +---------------------------------+  |
|                                        |
|        [Pesan Error (jika ada)]        |
|                                        |
+----------------------------------------+
```

---

#### **2. Layout Utama (Shell Aplikasi)**

Ini bukan halaman, melainkan kerangka yang konsisten di semua halaman setelah pengguna login.

*   **Tujuan:** Menyediakan navigasi dan konteks yang konsisten.
*   **Elemen Kunci:**
    1.  **[Sidebar Kiri (Navigasi)]**:
        *   [Logo Aplikasi] di bagian atas.
        *   [Link Navigasi: Dashboard] (dengan ikon).
        *   [Link Navigasi: Data Siswa] (dengan ikon).
        *   [Link Navigasi: Kuota Sekolah] (dengan ikon).
        *   [Area Kosong]
        *   [Link Navigasi: Logout] (dengan ikon) di bagian bawah.
    2.  **[Header Atas]**:
        *   [Judul Halaman Saat Ini] (misalnya, "Dashboard", "Data Siswa").
        *   [Informasi Pengguna] (misalnya, "Halo, Admin Budi") di sisi kanan.
    3.  **[Area Konten Utama]**: Area dinamis tempat konten halaman akan dimuat.

---

#### **3. Halaman Dashboard (`/dashboard`)**

Halaman pertama yang dilihat pengguna setelah login. Memberikan gambaran umum secara cepat.

*   **Tujuan Halaman:** Memberikan ringkasan status sistem secara visual.
*   **Elemen Kunci:**
    1.  **[Layout Utama]**: Menggunakan kerangka Sidebar dan Header.
    2.  **[Judul Halaman]**: "Dashboard".
    3.  **[Baris Kartu Statistik]**: Empat kotak besar yang berjejer, masing-masing berisi:
        *   **Kartu 1:** Judul "Total Pendaftar", Angka besar (misal: "1.520"), Teks kecil "Siswa".
        *   **Kartu 2:** Judul "Diterima", Angka besar (misal: "1.200").
        *   **Kartu 3:** Judul "Ditolak", Angka besar (misal: "120").
        *   **Kartu 4:** Judul "Dalam Proses", Angka besar (misal: "200").
    4.  **(Opsional) [Area Diagram]**: Kotak besar di bawah kartu statistik untuk diagram (misalnya, diagram lingkaran "Distribusi Kategori Afirmasi").

**Sketsa Lo-Fi (Area Konten):**
```
+------------------------------------------------------+
|  Dashboard                                           |
+------------------------------------------------------+
|                                                      |
|  +--------------+ +--------------+ +--------------+  |
|  | Total Pendaftar| |  Diterima    | |   Ditolak    |  |
|  |    1.520     | |    1.200     | |     120      |  |
|  +--------------+ +--------------+ +--------------+  |
|                                                      |
|  +-------------------------------------------------+ |
|  |                                                 | |
|  |                Area Diagram                     | |
|  |                                                 | |
|  +-------------------------------------------------+ |
+------------------------------------------------------+
```

---

#### **4. Halaman Data Siswa (`/siswa`)**

Halaman inti tempat sebagian besar pekerjaan admin dilakukan.

*   **Tujuan Halaman:** Menampilkan, mengelola, dan memvalidasi data pendaftar.
*   **Elemen Kunci:**
    1.  **[Layout Utama]**: Menggunakan kerangka Sidebar dan Header.
    2.  **[Header Halaman]**:
        *   Judul Halaman: "Data Siswa".
        *   **[Tombol Aksi Utama: Import Siswa]** di sisi kanan atas.
        *   **[Tombol Aksi Sekunder: Tambah Siswa]** di samping tombol import.
    3.  **[Area Filter & Pencarian]**: Baris di atas tabel berisi:
        *   **[Input Field: Cari Siswa...]** (berdasarkan Nama/NIK).
        *   **[Dropdown: Filter Kategori]** (Semua, DTKS, Disabilitas).
        *   **[Dropdown: Filter Status]** (Semua, Diterima, Ditolak, Proses).
    4.  **[Tabel Data Siswa]**: Tabel utama yang menampilkan daftar siswa.
        *   **[Kolom Tabel]**: `Nama`, `NIK`, `Sekolah Tujuan`, `Verifikasi Dukcapil`, `Verifikasi DTKS`, `Kategori`, `Status`, `Aksi`.
        *   **[Indikator Status Visual]**: Status verifikasi dan status penerimaan menggunakan label berwarna (misal: "Padan" hijau, "Ditolak" merah).
        *   **[Tombol Aksi per Baris]**: Ikon untuk "Edit" dan "Hapus" di kolom Aksi.
    5.  **[Area Paginasi]**: Navigasi halaman di bawah tabel (misal: `< Sebelumnya | 1 | 2 | 3 | Berikutnya >`).

---

#### **5. Halaman Kuota Sekolah (`/sekolah`)**

Halaman untuk mengelola data master sekolah.

*   **Tujuan Halaman:** Mengelola daftar sekolah dan kuota afirmasi mereka.
*   **Elemen Kunci:**
    1.  **[Layout Utama]**: Menggunakan kerangka Sidebar dan Header.
    2.  **[Header Halaman]**:
        *   Judul Halaman: "Kuota Sekolah".
        *   **[Tombol Aksi Utama: Tambah Sekolah]** di sisi kanan atas.
    3.  **[Tabel Data Sekolah]**:
        *   **[Kolom Tabel]**: `NPSN`, `Nama Sekolah`, `Alamat`, `Kuota Afirmasi`, `Terpakai`, `Sisa`, `Aksi`.
        *   **[Tombol Aksi per Baris]**: Ikon untuk "Edit" dan "Hapus".

---

### **Komponen Modal (Pop-up)**

Ini bukan halaman penuh, melainkan jendela pop-up yang muncul di atas halaman saat aksi tertentu dilakukan.

#### **6. Modal: Import Siswa**

Muncul saat tombol "Import Siswa" di Halaman Data Siswa diklik.

*   **Tujuan:** Memfasilitasi proses upload file data siswa.
*   **Elemen Kunci:**
    1.  **[Judul Modal]**: "Import Data Siswa dari Excel/CSV".
    2.  **[Link Unduh Template]**: Teks dengan link "Unduh template di sini."
    3.  **[Area Upload File]**: Kotak besar dengan instruksi "Seret file ke sini atau klik untuk memilih file".
    4.  **[Nama File Terpilih]**: Teks yang menampilkan nama file setelah dipilih.
    5.  **[Indikator Loading & Progress Bar]**: Muncul setelah tombol "Unggah" diklik.
    6.  **[Tombol Aksi]**:
        *   **[Tombol Utama: Unggah]** (menjadi non-aktif saat proses berjalan).
        *   **[Tombol Sekunder: Batal]**.

#### **7. Modal: Tambah/Edit Siswa**

Muncul saat tombol "Tambah Siswa" atau ikon "Edit" di tabel siswa diklik.

*   **Tujuan:** Menyediakan formulir untuk entri data manual.
*   **Elemen Kunci:**
    1.  **[Judul Modal]**: "Tambah Siswa Baru" atau "Edit Data Siswa".
    2.  **[Formulir Input]**: Serangkaian input field:
        *   `NIK`, `NISN`, `Nama Lengkap`, `Tanggal Lahir`, `Nama Ibu Kandung`.
        *   Dropdown untuk memilih `Sekolah Tujuan`.
    3.  **[Tombol Aksi]**:
        *   **[Tombol Utama: Simpan]**.
        *   **[Tombol Sekunder: Batal]**.

#### **8. Modal: Tambah/Edit Sekolah**

Mirip dengan modal siswa, tetapi untuk data sekolah.

*   **Tujuan:** Menyediakan formulir untuk entri data sekolah.
*   **Elemen Kunci:**
    1.  **[Judul Modal]**: "Tambah Sekolah Baru" atau "Edit Data Sekolah".
    2.  **[Formulir Input]**: `NPSN`, `Nama Sekolah`, `Alamat`, `Kuota Afirmasi`.
    3.  **[Tombol Aksi]**: "Simpan" dan "Batal".

Dengan merancang sketsa kasar (wireframe) untuk 5 halaman dan 3 modal ini, Anda akan memiliki fondasi yang sangat kuat untuk alur kerja aplikasi ULAS. Ini akan sangat mempercepat proses desain high-fidelity dan pengembangan karena semua fungsionalitas dan penempatan elemen sudah disepakati.