// script.js

document.addEventListener("DOMContentLoaded", () => {
  // --- Navigasi & Logika Umum ---
  const loginButton = document.getElementById("login-btn");
  if (loginButton) {
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }

  const logoutButton = document.getElementById("logout-btn");
  if (logoutButton) {
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "index.html";
    });
  }

  // --- Logika Sidebar Aktif ---
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // --- LOGIKA BARU: Hamburger Menu ---
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const sidebar = document.querySelector(".sidebar");

  if (hamburgerMenu && sidebar) {
    hamburgerMenu.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  // --- Logika Modal ---
  const modalTriggers = document.querySelectorAll("[data-modal-target]");
  const modalOverlays = document.querySelectorAll(".modal-overlay");

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal-target");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove("hidden");
      }
    });
  });

  modalOverlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("modal-overlay") ||
        e.target.classList.contains("close-button")
      ) {
        overlay.classList.add("hidden");
      }
    });
  });

  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(`Form ${form.id} submitted (simulated).`);
      const parentModal = form.closest(".modal-overlay");
      if (parentModal) {
        parentModal.classList.add("hidden");
      }
    });
  });

  // --- FUNGSI PENCARIAN DAN FILTER ---
  const searchInput = document.getElementById("searchInput");
  const kategoriFilter = document.getElementById("kategoriFilter");
  const verifikasiFilter = document.getElementById("verifikasiFilter");
  const statusFilter = document.getElementById("statusFilter");
  const siswaTableBody = document.getElementById("siswaTableBody");
  const tableRows = siswaTableBody
    ? siswaTableBody.getElementsByTagName("tr")
    : [];

  function filterTable() {
    const searchText = searchInput.value.toLowerCase();
    const kategoriValue = kategoriFilter.value.toLowerCase();
    const verifikasiValue = verifikasiFilter.value.toLowerCase();
    const statusValue = statusFilter.value.toLowerCase();

    for (let i = 0; i < tableRows.length; i++) {
      const row = tableRows[i];
      const nama = row.cells[0].textContent.toLowerCase();
      const nik = row.cells[1].textContent.toLowerCase();
      const verifikasi = row.cells[4].textContent.toLowerCase();
      const kategori = row.cells[5].textContent.toLowerCase();
      const status = row.cells[6].textContent.toLowerCase();

      const searchMatch = nama.includes(searchText) || nik.includes(searchText);
      const kategoriMatch =
        kategoriValue === "semua" || kategori.includes(kategoriValue);
      const verifikasiMatch =
        verifikasiValue === "semua" || verifikasi.includes(verifikasiValue);
      const statusMatch =
        statusValue === "semua" || status.includes(statusValue);

      if (searchMatch && kategoriMatch && verifikasiMatch && statusMatch) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  }

  if (searchInput) searchInput.addEventListener("keyup", filterTable);
  if (kategoriFilter) kategoriFilter.addEventListener("change", filterTable);
  if (verifikasiFilter)
    verifikasiFilter.addEventListener("change", filterTable);
  if (statusFilter) statusFilter.addEventListener("change", filterTable);

  /* 
    ==================================================
    LOGIKA BARU: Inisialisasi Donut Charts di Dashboard
    ==================================================
    */
  const demakChartCanvas = document.getElementById("demakChart");
  const jeparaChartCanvas = document.getElementById("jeparaChart");

  // Pastikan kita berada di halaman dashboard sebelum menjalankan kode chart
  if (demakChartCanvas && jeparaChartCanvas) {
    // --- Data & Konfigurasi untuk Chart DEMAK ---
    const dataDemak = {
      labels: ["Terpakai", "Sisa"],
      datasets: [
        {
          label: "Kuota Demak",
          data: [227, 23], // [Terpakai, Sisa]
          backgroundColor: [
            "rgba(0, 123, 255, 0.8)", // Biru untuk Terpakai
            "rgba(220, 220, 220, 0.8)", // Abu-abu untuk Sisa
          ],
          borderColor: ["rgba(0, 123, 255, 1)", "rgba(200, 200, 200, 1)"],
          borderWidth: 1,
        },
      ],
    };

    const configDemak = {
      type: "doughnut", // Tipe chart diubah menjadi doughnut
      data: dataDemak,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Kuota Wilayah Demak",
            font: { size: 16 },
          },
        },
      },
    };

    new Chart(demakChartCanvas, configDemak);

    // --- Data & Konfigurasi untuk Chart JEPARA ---
    const dataJepara = {
      labels: ["Terpakai", "Sisa"],
      datasets: [
        {
          label: "Kuota Jepara",
          data: [242, 13], // [Terpakai, Sisa]
          backgroundColor: [
            "rgba(40, 167, 69, 0.8)", // Hijau untuk Terpakai
            "rgba(220, 220, 220, 0.8)", // Abu-abu untuk Sisa
          ],
          borderColor: ["rgba(40, 167, 69, 1)", "rgba(200, 200, 200, 1)"],
          borderWidth: 1,
        },
      ],
    };

    const configJepara = {
      type: "doughnut", // Tipe chart diubah menjadi doughnut
      data: dataJepara,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Kuota Wilayah Jepara",
            font: { size: 16 },
          },
        },
      },
    };

    new Chart(jeparaChartCanvas, configJepara);
  }
});
