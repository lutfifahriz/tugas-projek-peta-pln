const data = [
  {
    id: 7301,
    coords: [-6.8661666667, 109.6764833333],
    desa: "Panjang Baru",
    kecamatan: "Pekalongan Utara",
    tanggal: "2025-06-18",
    surveyor: "qgis.wrd",
    jenis_pju: "Abonemen",
    sumber: "Saluran Rumah / Dak Standar",
    jenis_beban: "Pijar",
    daya_watt: 50,
    foto: "foto1.jpg",
    e_tikor: "S6 51.970 E109 40.589",
    e_jenis_beban: "SL",
    e_daya_watt: 30,
    e_jenis_pju: "Abonemen",
    e_idpel: 777980,
    e_daya_plg_va: 2200
  },
  {
    id: 7309,
    coords: [-6.8767833333, 109.6763833333],
    desa: "Panjang Wetan",
    kecamatan: "Pekalongan Utara",
    tanggal: "2025-06-17",
    surveyor: "qgis.btg",
    jenis_pju: "Abonemen",
    sumber: "Tiang Listrik",
    jenis_beban: "Pijar",
    daya_watt: 200,
    foto: "foto2.jpg",
    e_tikor: "S6 52.607 E109 40.583",
    e_jenis_beban: "SON T",
    e_daya_watt: 150,
    e_jenis_pju: "Abonemen",
    e_idpel: 5245170802750,
    e_daya_plg_va: 7700
  },
  {
    id: 7314,
    coords: [-6.8752333333, 109.6777],
    desa: "Krapyak",
    kecamatan: "Pekalongan Utara",
    tanggal: "2025-07-03",
    surveyor: "qgis.wrd",
    jenis_pju: "Abonemen",
    sumber: "Tiang Listrik",
    jenis_beban: "Fitting tanpa Lampu",
    daya_watt: 50,
    foto: "foto3.jpg",
    e_tikor: "S6 52.514 E109 40.662",
    e_jenis_beban: "SL",
    e_daya_watt: 30,
    e_jenis_pju: "Abonemen",
    e_idpel: 524511025541,
    e_daya_plg_va: 7700
  },
  {
    id: 7337,
    coords: [-6.8689666667, 109.6732333333],
    desa: "Kandang Panjang",
    kecamatan: "Pekalongan Utara",
    tanggal: "2025-06-25",
    surveyor: "qgis.kdw",
    jenis_pju: "Abonemen",
    sumber: "Tiang Listrik",
    jenis_beban: "LED",
    daya_watt: 100,
    foto: "foto4.jpg",
    e_tikor: "S6 52.138 E109 40.394",
    e_jenis_beban: "SL",
    e_daya_watt: 30,
    e_jenis_pju: "Abonemen",
    e_idpel: 524510779656,
    e_daya_plg_va: 4400
  },
  {
    id: 7341,
    coords: [-6.8733166667, 109.6772333333],
    desa: "Panjang Wetan",
    kecamatan: "Pekalongan Utara",
    tanggal: "2025-06-16",
    surveyor: "qgis.btg",
    jenis_pju: "Abonemen",
    sumber: "Saluran Rumah / Dak Standar",
    jenis_beban: "LED",
    daya_watt: 50,
    foto: "foto5.jpg",
    e_tikor: "S6 52.399 E109 40.634",
    e_jenis_beban: "-",
    e_daya_watt: 150,
    e_jenis_pju: "Abonemen",
    e_idpel: 524510779578,
    e_daya_plg_va: 3500
  }
];

const map = L.map("map").setView([-6.87, 109.67], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap"
}).addTo(map);

data.forEach(loc => {
  const marker = L.marker(loc.coords).addTo(map);

  // Hover popup
  marker.bindPopup(`
    <div style="max-width: 200px;">
      <b>ID:</b> ${loc.id}<br>
      <b>Alamat:</b> ${loc.desa}, ${loc.kecamatan}<br>
      <b>Koordinat:</b> ${loc.coords.join(', ')}<br>
      <img src="${loc.foto}" alt="Foto" style="width: 40%; margin-top: 6px; border-radius: 6px;">
    </div>
  `);

  // ⬇️ Pindahkan isi sidebar ke dalam klik marker ⬇️
  marker.on("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("hidden"); // pastikan tampil
    sidebar.classList.add("active");    // munculkan sidebar

    sidebar.innerHTML = `
      <button id="closeSidebarBtn" class="close-btn">×</button>
      <h2>${loc.id}</h2>
      <img src="${loc.foto}" alt="Foto">
      <p><b>Desa/Kecamatan:</b> ${loc.desa}, ${loc.kecamatan}</p>
      <p><b>Koordinat:</b> ${loc.coords.join(", ")}</p>
      <p><b>Tanggal Survey:</b> ${loc.tanggal}</p>
      <p><b>Surveyor:</b> ${loc.surveyor}</p>
      <p><b>Jenis PJU:</b> ${loc.jenis_pju}</p>
      <p><b>Sumber Listrik:</b> ${loc.sumber}</p>
      <p><b>Jenis Beban:</b> ${loc.jenis_beban}</p>
      <p><b>Daya Watt:</b> ${loc.daya_watt}</p>
      <p><b>e_Tikor:</b> ${loc.e_tikor}</p>
      <p><b>e_Jenis Beban:</b> ${loc.e_jenis_beban}</p>
      <p><b>e_Daya Watt:</b> ${loc.e_daya_watt}</p>
      <p><b>e_Jenis PJU:</b> ${loc.e_jenis_pju}</p>
      <p><b>e_Idpel:</b> ${loc.e_idpel}</p>
      <p><b>e_Daya Pelanggan VA:</b> ${loc.e_daya_plg_va}</p>
    `;

    // Tombol X buat nutup sidebar
    document.getElementById("closeSidebarBtn").addEventListener("click", () => {
      sidebar.classList.remove("active");
      sidebar.classList.add("hidden"); // hide sidebar lagi
    });
  });
});


function handleKey(e) {
  if (e.key === "Enter") {
    const query = document.getElementById("custom-search").value.trim();
    const found = data.find(d => d.id.toString() === query);
    if (found) {
      map.setView(found.coords, 17);
      L.popup()
        .setLatLng(found.coords)
        .setContent(`<b>${found.id}</b><br>${found.sumber}<br><img src="${found.foto}" width="100">`)
        .openOn(map);
    } else {
      alert("ID tidak ditemukan");
    }
  }
}

// Aktifkan pencarian dengan Enter
document.getElementById("custom-search").addEventListener("keydown", handleKey);
function handleKey(e) {
  if (e.key === "Enter") {
    const query = e.target.value.trim();
    if (!query) return alert("Masukkan ID pelanggan.");

    const found = data.find(d => d.id.toString() === query);
    if (found) {
      map.setView(found.coords, 17);
      L.popup()
        .setLatLng(found.coords)
        .setContent(`<b>${found.id}</b><br>${found.sumber}<br><img src="${found.foto}" width="100">`)
        .openOn(map);
    } else {
      alert("ID tidak ditemukan");
    }
  }
}
function handleGlobalSearch(e) {
  if (e.key === "Enter") {
    const query = e.target.value.trim();
    if (!query) return;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          const name = data[0].display_name;

          map.setView([lat, lon], 15);
          L.popup()
            .setLatLng([lat, lon])
            .setContent(`<b>${name}</b>`)
            .openOn(map);
        } else {
          alert("Lokasi tidak ditemukan.");
        }
      })
      .catch(err => {
        console.error("Gagal mencari lokasi:", err);
        alert("Terjadi kesalahan saat pencarian.");
      });
  }
}
document.getElementById("global-search").addEventListener("keydown", handleGlobalSearch);
