const characters = [
  { name: "Plum", birthday: "Spring 4", gift: "Wheat Flour" },
  { name: "Harvest Goddess", birthday: "Spring 8", gift: "Egg" },
  { name: "Kappa", birthday: "Spring 9", gift: "Cucumber" },
  { name: "Saibara", birthday: "Spring 11", gift: "Orichalcum" },
  { name: "Blueberry", birthday: "Spring 15", gift: "Wheat Flour" },
  { name: "Elly", birthday: "Spring 16", gift: "Moon Dumplings" },
  { name: "Mugi", birthday: "Spring 17", gift: "Onigiri" },
  { name: "Lillia", birthday: "Spring 19", gift: "Honey" },
  { name: "Bon Vivant", birthday: "Spring 21", gift: "Hot Spring Egg" },
  { name: "Aqua", birthday: "Spring 26", gift: "Wheat Flour" },
  { name: "Sasha", birthday: "Spring 30", gift: "Chocolate" },
  { name: "Popuri", birthday: "Summer 3", gift: "Chocolate" },
  { name: "Harris", birthday: "Summer 4", gift: "Hot Spring Egg" },
  { name: "Cliff", birthday: "Summer 6", gift: "Curry Rice" },
  { name: "Basil", birthday: "Summer 11", gift: "Wild Grapes" },
  { name: "Mint", birthday: "Summer 16", gift: "Wheat Flour" },
  { name: "Ran", birthday: "Summer 17", gift: "Chocolate" },
  { name: "Kai", birthday: "Summer 22", gift: "Pineapple / Wheat Flour" },
  { name: "Thomas", birthday: "Summer 25", gift: "Curros" },
  { name: "Zack", birthday: "Summer 29", gift: "Apple" },
  { name: "Gotts", birthday: "Fall 2", gift: "Honey" },
  { name: "Yu", birthday: "Fall 5", gift: "Honey" },
  { name: "Brandon", birthday: "Fall 7", gift: "Honey" },
  { name: "Sunny", birthday: "Fall 10", gift: "Wheat Flour" },
  { name: "Manna", birthday: "Fall 11", gift: "Milk" },
  { name: "Cherry", birthday: "Fall 14", gift: "Wheat Flour" },
  { name: "Karen", birthday: "Fall 15", gift: "Popcorn" },
  { name: "Doctor", birthday: "Fall 19", gift: "Milk" },
  { name: "Carter", birthday: "Fall 20", gift: "Wheat Flour" },
  { name: "Anna", birthday: "Fall 23", gift: "Honey" },
  { name: "Rick", birthday: "Fall 27", gift: "Hot Spring Egg" },
  { name: "Jennifer", birthday: "Winter 2", gift: "Chocolate" },
  { name: "Gray", birthday: "Winter 6", gift: "Chocolate" },
  { name: "Dudley", birthday: "Winter 11", gift: "Honey" },
  { name: "Ellen", birthday: "Winter 13", gift: "Honey" },
  { name: "Duke", birthday: "Winter 15", gift: "Bread" },
  { name: "Huang", birthday: "Winter 19", gift: "Gold" },
  { name: "Marie", birthday: "Winter 20", gift: "Chocolate" },
  { name: "Pumpkin", birthday: "Winter 22", gift: "Wheat Flour" },
  { name: "Mei", birthday: "Winter 26", gift: "Chocolate" },
  { name: "Jeff", birthday: "Winter 29", gift: "Honey" },
  { name: "Van", birthday: "-", gift: "Diamond" },
  { name: "Lou", birthday: "-", gift: "All Dish" }
];

const listElement = document.getElementById("birthdayList");
const searchInput = document.getElementById("searchInput");
const seasonFilter = document.getElementById("seasonFilter");

function showList() {
  const filterText = searchInput.value.toLowerCase();
  const selectedSeason = seasonFilter.value;

  listElement.innerHTML = "";

    const filtered = characters.filter(c => {
    const matchName = c.name.toLowerCase().includes(filterText);
    const matchSeason =
        selectedSeason === "all" ||
        (c.birthday !== "-" && c.birthday.startsWith(selectedSeason));
    return matchName && matchSeason;
    });


  if (filtered.length === 0) {
    listElement.innerHTML = "<li>Tidak ditemukan 😢</li>";
    return;
  }

  filtered.forEach(c => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${c.name}</strong>
      <small>🎂 Ulang Tahun: ${c.birthday}</small>
      <small>🎁 Hadiah Favorit: ${c.gift}</small>
    `;
    listElement.appendChild(li);
  });
}

searchInput.addEventListener("input", showList);
seasonFilter.addEventListener("change", showList);

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

showList(); // tampilkan semua awalnya

const spring = [
  ["Cabbage", "no", "14", "0", "500", "250"],
  ["Cucumber", "yes", "9", "5", "200", "60"],
  ["Potato", "no", "7", "0", "150", "80"],
  ["Strawberry", "yes", "9", "3", "150", "65"],
  ["Turnip", "no", "4", "0", "120", "60"]
];

const summer = [
  ["Corn", "yes", "14", "3", "300", "85"],
  ["Onion", "no", "7", "0", "150", "80"],
  ["Pineapple", "yes", "20", "5", "1000", "500"],
  ["Pumpkin", "no", "14", "0", "500", "280"],
  ["Tomato", "yes", "9", "3", "200", "50"]
];

const fall = [
  ["Adzuki Bean", "yes", "9", "4", "300", "80"],
  ["Carrot", "no", "7", "0", "300", "120"],
  ["Chili Pepper", "yes", "13", "5", "300", "100"],
  ["Eggplant", "yes", "9", "3", "120", "60"],
  ["Spinach", "no", "5", "0", "200", "110"],
  ["Yam", "yes", "6", "3", "300", "55"]
];

const fishData = [
  { name: "Fat Greeling", seasons: ["All Year"], location: "Ocean", level: 3, size: "40 cm", caught: false },
  { name: "Horse Mackerel", seasons: ["All Year"], location: "Ocean", level: 3, size: "40 cm", caught: false },
  { name: "Amur Minnow", seasons: ["All Year"], location: "Lake, Bridge, Pond", level: 1, size: "15 cm", caught: false },
  { name: "Masu Trout", seasons: ["All Year"], location: "Lake, Bridge, Pond", level: 1, size: "25 cm", caught: false },
  { name: "Chicken Grunt", seasons: ["All Year"], location: "Ocean", level: 3, size: "40 cm", caught: false },
  { name: "Sardine", seasons: ["All Year"], location: "Ocean", level: 1, size: "25 cm", caught: false },
  { name: "Char", seasons: ["Spring", "Summer", "Fall"], location: "Bridge, Pond", level: 4, size: "50 cm", caught: false },
  { name: "Dace", seasons: ["All Year"], location: "Waterfall, Stream, Pond", level: 2, size: "35 cm", caught: false },
  { name: "Eel", seasons: ["All Year"], location: "Stream / Ocean*", level: 5, size: "100 cm", caught: false },
  { name: "Pale Chub", seasons: ["All Year"], location: "Stream", level: 1, size: "15 cm", caught: false },
  { name: "Bonito", seasons: ["Spring", "Summer", "Fall"], location: "Ocean", level: 5, size: "90 cm", caught: false },
  { name: "Flounder", seasons: ["All Year"], location: "Ocean", level: 4, size: "60 cm", caught: false },
  { name: "Thread-sail Filefish", seasons: ["Spring", "Fall", "Winter"], location: "Ocean", level: 2, size: "30 cm", caught: false },
  { name: "Goldfish", seasons: ["All Year"], location: "Waterfall, Stream", level: 1, size: "20 cm", caught: false },
  { name: "Crucian Carp", seasons: ["All Year"], location: "Waterfall, Stream", level: 2, size: "30 cm", caught: false },
  { name: "Longtooth Grouper", seasons: ["Spring", "Fall", "Winter"], location: "Ocean", level: 4, size: "70 cm", caught: false },
  { name: "Bighead Carp", seasons: ["All Year"], location: "Lake, Stream", level: 5, size: "100 cm", caught: false },
  { name: "Salmon", seasons: ["Summer", "Autumn"], location: "Stream", level: 4, size: "70 cm", caught: false },
  { name: "Mackerel", seasons: ["All Year"], location: "Ocean", level: 4, size: "50 cm", caught: false },
  { name: "Needlefish", seasons: ["Spring", "Summer", "Fall"], location: "Ocean", level: 3, size: "40 cm", caught: false },
  { name: "Seerfish", seasons: ["Spring", "Summer", "Winter"], location: "Ocean", level: 5, size: "100 cm", caught: false },
  { name: "Pike", seasons: ["Autumn"], location: "Ocean", level: 3, size: "40 cm", caught: false },
  { name: "Mahi-mahi", seasons: ["Spring", "Summer", "Fall"], location: "Ocean", level: 5, size: "180 cm", caught: false },
  { name: "Sea Bream", seasons: ["All Year"], location: "Ocean", level: 5, size: "100 cm", caught: false },
  { name: "Cod", seasons: ["Spring", "Winter"], location: "Ocean", level: 4, size: "50 cm", caught: false },
  { name: "Loach", seasons: ["Spring", "Summer", "Fall"], location: "Stream, Pond", level: 1, size: "12 cm", caught: false },
  { name: "Dark Sleeper", seasons: ["All Year"], location: "Stream, Pond", level: 1, size: "25 cm", caught: false },
  { name: "Rainbow Trout", seasons: ["All Year"], location: "Lake, Bridge, Lake Mine", level: 5, size: "100 cm", caught: false },
  { name: "Pacific Herring", seasons: ["All Year"], location: "Ocean", level: 1, size: "30 cm", caught: false },
  { name: "Silver Carp", seasons: ["All Year"], location: "Stream, Pond", level: 5, size: "100 cm", caught: false },
  { name: "Sailfin Sandfish", seasons: ["Spring", "Fall", "Winter"], location: "Ocean", level: 1, size: "20 cm", caught: false },
  { name: "Halibut", seasons: ["All Year"], location: "Ocean", level: 5, size: "80 cm", caught: false },
  { name: "Blowfish", seasons: ["Spring", "Winter"], location: "Ocean", level: 4, size: "50 cm", caught: false },
  { name: "Black Bass", seasons: ["All Year"], location: "Everywhere but Ocean", level: 4, size: "50 cm", caught: false },
  { name: "Yellowtail", seasons: ["Spring", "Winter"], location: "Ocean", level: 5, size: "100 cm", caught: false },
  { name: "Bluegill", seasons: ["All Year"], location: "Everywhere but Ocean", level: 1, size: "25 cm", caught: false },
  { name: "Crucian Carp", seasons: ["All Year"], location: "Lake, Waterfall", level: 4, size: "50 cm", caught: false },
  { name: "Atka Mackerel", seasons: ["Spring", "Fall", "Winter"], location: "Ocean", level: 3, size: "40 cm", caught: false },
  { name: "Tuna", seasons: ["All Year"], location: "Ocean", level: 5, size: "250 cm", caught: false },
  { name: "Ocean Sunfish", seasons: ["Spring", "Summer", "Fall"], location: "Ocean", level: 5, size: "250 cm", caught: false },
  { name: "Luna Lionfish", seasons: ["All Year"], location: "Ocean", level: 2, size: "30 cm", caught: false },
  { name: "Red Seaperch", seasons: ["Spring", "Summer", "Fall"], location: "Ocean", level: 2, size: "30 cm", caught: false },
  { name: "Cherry Salmon", seasons: ["All Year"], location: "Bridge", level: 2, size: "30 cm", caught: false },
  { name: "Blotched Snakehead", seasons: ["Spring", "Summer", "Fall"], location: "Waterfall, Stream, Pond", level: 5, size: "80 cm", caught: false },
  { name: "Smelt", seasons: ["Spring", "Fall", "Winter"], location: "Waterfall, Stream, Pond", level: 1, size: "15 cm", caught: false },
  { name: "Beltfish", seasons: ["Summer", "Autumn"], location: "Ocean", level: 5, size: "200 cm", caught: false },
  { name: "Sweetfish", seasons: ["Summer", "Autumn"], location: "Bridge, Stream", level: 3, size: "30 cm", caught: false },
  { name: "Sand Smelt", seasons: ["Spring", "Summer"], location: "Stream, Ocean", level: 3, size: "30 cm", caught: false },
  { name: "Pike Conger", seasons: ["Summer", "Autumn"], location: "Ocean", level: 5, size: "150 cm", caught: false },
  { name: "Flying Fish", seasons: ["Summer", "Autumn"], location: "Ocean", level: 2, size: "30 cm", caught: false },

  {
    name: "Huchen",
    seasons: ["Spring", "Summer", "Autumn"],
    location: "Stream",
    requirements: "Know the Grilled Fish, Sashimi, and Sushi cooking recipes",
    caught: false,
    level: "-",
    size: "-",
  },

  {
    name: "Anglerfish",
    seasons: ["Spring", "Winter"],
    location: "Ocean",
    requirements: "Go fishing between 8:00 pm and 8:00 am",
    caught: false,
    level: "-",
    size: "-",
  },

  {
    name: "Hot Spring Catfish",
    seasons: ["Winter"],
    location: "Hot Spring",
    requirements: "(No additional requirements)",
    caught: false,
    level: "-",
    size: "-",
  },

  {
    name: "Carp",
    seasons: ["Spring", "Summer", "Autumn"],
    location: "Lake",
    requirements: "Ship at least 200 fish",
    caught: false,
    level: "-",
    size: "-",
  },

  {
    name: "Coelacanth",
    seasons: ["All Year"],
    location: "Level 9 of the Lake Mine",
    requirements: "Catch 5 or more Guardian fish",
    caught: false,
    level: "-",
    size: "-",
  },

  {
    name: "Squid",
    seasons: ["Spring", "Winter"],
    location: "Ocean",
    requirements: "Go fishing between 9:00 am and 12:00 am (midnight)",
    caught: false,
    level: "-",
    size: "-",
  },

  {
    name: "Arapaima Gigas",
    seasons: ["Summer"],
    location: "Pond",
    requirements: "Catch at least 50 species of fish",
    caught: false,
    level: "-",
    size: "-",
  }
];



// Fungsi untuk render daftar crops berdasarkan musim
function showCrops(season) {
  const listEl = document.getElementById("cropsList");
  listEl.innerHTML = "";

  let cropsData;
  if (season === "spring") cropsData = spring;
  else if (season === "summer") cropsData = summer;
  else if (season === "fall") cropsData = fall;
  else cropsData = [];

  if (cropsData.length === 0) {
    listEl.innerHTML = "<li>Data tanaman tidak ditemukan 😢</li>";
    return;
  }

  cropsData.forEach(crop => {
    const [name, regrow, firstHarvest, regrowDays, seedPrice, sellPrice] = crop;
    const regrowText = regrow === "yes" ? `Panen ulang setiap ${regrowDays} hari` : "Tidak bisa panen ulang";

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${name}</strong>
      <small>⏳ Waktu panen pertama: ${firstHarvest} hari</small>
      <small>🔄 ${regrowText}</small>
      <small>💰 Harga beli bibit: ${seedPrice} G</small>
      <small>💵 Harga jual hasil panen: ${sellPrice} G</small>
    `;
    listEl.appendChild(li);
  });
}

// Event listener untuk dropdown musim crops
document.getElementById("cropsSeasonFilter").addEventListener("change", (e) => {
  showCrops(e.target.value);
});

// Integrasi showSection supaya navbar bisa switch antar halaman
function showSection(section) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    sec.style.display = "none";
  });

  if (section === "birthday") {
    document.getElementById("birthday").style.display = "block";
  } else if (section === "crops") {
    document.getElementById("cropsSection").style.display = "block";
    const season = document.getElementById("cropsSeasonFilter").value;
    showCrops(season);
    showHarvestSchedule(season);
  } else if (section === "fish") {
    document.getElementById("fishSection").style.display = "block";
    showFishList();
  }
}


document.getElementById("cropsSeasonFilter").addEventListener("change", (e) => {
  const season = e.target.value;
  showCrops(season);
  showHarvestSchedule(season); // tambahan render jadwal panen
});


// Panggil showSection awal supaya tampil halaman birthday & gift dulu
showSection("birthday");

document.getElementById("tgl").addEventListener("change", () => {
  const season = document.getElementById("cropsSeasonFilter").value;
  showHarvestSchedule(season); // render ulang jadwal sesuai tgl baru
});


// Fungsi generate jadwal panen 30 hari
function generateHarvestSchedule(crops, startDate = 1, totalDays = 30) {
  const schedule = {};
  for (let day = startDate; day <= totalDays; day++) {
    schedule[day] = [];
  }

  crops.forEach(crop => {
    const [name, regrow, firstHarvestStr, regrowDaysStr] = crop;
    const firstHarvest = parseInt(firstHarvestStr);
    const regrowDays = parseInt(regrowDaysStr);

    let harvestDay = startDate + firstHarvest;

    if (harvestDay <= totalDays) {
      schedule[harvestDay].push(`Panen ${name}`);

      if (regrow === "yes" && regrowDays > 0) {
        let nextHarvest = harvestDay + regrowDays;
        while (nextHarvest <= totalDays) {
          schedule[nextHarvest].push(`Panen ${name}`);
          nextHarvest += regrowDays;
        }
      }
    }
  });

  return schedule;
}

// Fungsi render jadwal panen
function showHarvestSchedule(season) {
  const scheduleTable = document.getElementById("harvestSchedule");
  scheduleTable.innerHTML = "";

  const startDate = parseInt(document.getElementById("tgl").value);

  let cropsData;
  if (season === "spring") cropsData = spring;
  else if (season === "summer") cropsData = summer;
  else if (season === "fall") cropsData = fall;
  else cropsData = [];

  if (cropsData.length === 0) {
    scheduleTable.innerHTML = "<tr><td colspan='2'>Data tanaman tidak ditemukan 😢</td></tr>";
    return;
  }

  const schedule = generateHarvestSchedule(cropsData, startDate, 30);

  const headerRow = document.createElement("tr");
  const dayHeader = document.createElement("th");
  dayHeader.textContent = "Hari";
  const activityHeader = document.createElement("th");
  activityHeader.textContent = "Aktivitas Panen";
  headerRow.appendChild(dayHeader);
  headerRow.appendChild(activityHeader);
  scheduleTable.appendChild(headerRow);

  for (let day = 1; day <= 30; day++) {
    const activities = schedule[day] || [];
    const row = document.createElement("tr");

    const dayCell = document.createElement("td");
    dayCell.textContent = day;

    const activityCell = document.createElement("td");
    if (activities.length > 0) {
      activityCell.textContent = activities.join(", ");
    } else {
      activityCell.textContent = "-";
      activityCell.style.color = "#777";
    }

    row.appendChild(dayCell);
    row.appendChild(activityCell);
    scheduleTable.appendChild(row);
  }
}

function showFishList() {
  const fishList = document.getElementById("fishList");
  fishList.innerHTML = "";

  // Tampilkan semua ikan tanpa filter
  const allFish = fishData; 

  if (allFish.length === 0) {
    fishList.innerHTML = "<li>Tidak ditemukan ikan 😢</li>";
    return;
  }

  allFish.forEach((f, index) => {
    const li = document.createElement("li");
    li.classList.add("fish-item");
    li.dataset.index = index;
    li.innerHTML = `
      <input type="checkbox" ${f.caught ? "checked" : ""}>
      <strong>${f.name}</strong>
      <small>🗓️ Musim: ${f.seasons.join(", ")}</small>
      <small>📍 Lokasi: ${f.location}</small>
      ${f.level !== "-" ? `<small>🎣 Level Min: ${f.level}</small>` : ""}
      ${f.size !== "-" ? `<small>📏 Ukuran Maks: ${f.size}</small>` : ""}
      ${f.requirements ? `<small>📌 Syarat: ${f.requirements}</small>` : ""}
    `;

    li.addEventListener("click", function (e) {
      if (e.target.tagName.toLowerCase() === "input") return;
      const checkbox = this.querySelector("input[type='checkbox']");
      checkbox.checked = !checkbox.checked;
      const idx = parseInt(this.dataset.index);
      fishData[idx].caught = checkbox.checked;
    });

    const checkbox = li.querySelector("input[type='checkbox']");
    checkbox.addEventListener("click", function (e) {
      const idx = parseInt(li.dataset.index);
      fishData[idx].caught = this.checked;
      e.stopPropagation();
    });

    fishList.appendChild(li);
  });
}

function toggleCaught(index) {
  fishData[index].caught = !fishData[index].caught;
}

function showUncaughtFish() {
  const uncaughtList = document.getElementById("uncaughtFishList");
  uncaughtList.innerHTML = "";

  const uncaught = fishData.filter(f => !f.caught);

  // Cari elemen info dulu (kalau ada)
  let info = document.getElementById("uncaughtInfo");

  if (uncaught.length === 0) {
    uncaughtList.innerHTML = "<li>🎉 Kamu sudah menangkap semua ikan! Hebat! 🎣</li>";
    // Kalau info ada, hapus supaya gak tampil
    if (info) {
      info.remove();
    }
    return;
  }

  // Kalau info belum ada, buat baru
  if (!info) {
    info = document.createElement("p");
    info.id = "uncaughtInfo";
    uncaughtList.parentNode.insertBefore(info, uncaughtList);
  }

  info.textContent = `Jumlah ikan belum tertangkap: ${uncaught.length}`;

uncaught.forEach(f => {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${f.name}</strong>
    <small>🗓️ Musim: ${f.seasons.join(", ")}</small>
    <small>📍 Lokasi: ${f.location}</small>
    ${f.level !== "-" ? `<small>🎣 Level Min: ${f.level}</small>` : ""}
    ${f.size !== "-" ? `<small>📏 Ukuran Maks: ${f.size}</small>` : ""}
    ${f.requirements ? `<small>📌 Syarat: ${f.requirements}</small>` : ""}
  `;
  uncaughtList.appendChild(li);
});

}

showFishList();
