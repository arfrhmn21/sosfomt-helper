window.onload = function() {
  window.scrollTo(0, 0);
};


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
  ["Adzuki Bean", "yes", "10", "4", "300", "80"],
  ["Carrot", "no", "7", "0", "300", "120"],
  ["Chili Pepper", "yes", "13", "5", "300", "100"],
  ["Eggplant", "yes", "9", "3", "120", "60"],
  ["Spinach", "no", "5", "0", "200", "110"],
  ["Yam", "yes", "6", "3", "300", "55"]
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
  const birthdaySection = document.querySelector(".container");
  const cropsSection = document.getElementById("cropsSection");

  if (section === "birthday") {
    birthdaySection.style.display = "block";
    cropsSection.style.display = "none";
  } else if (section === "crops") {
    birthdaySection.style.display = "none";
    cropsSection.style.display = "block";
    const season = document.getElementById("cropsSeasonFilter").value;
    showCrops(season);
    showHarvestSchedule(season);
  }

}

document.getElementById("cropsSeasonFilter").addEventListener("change", (e) => {
  const season = e.target.value;
  showCrops(season);
  showHarvestSchedule(season); // tambahan render jadwal panen
});


// Panggil showSection awal supaya tampil halaman birthday & gift dulu
showSection("birthday");

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

  let cropsData;
  if (season === "spring") cropsData = spring;
  else if (season === "summer") cropsData = summer;
  else if (season === "fall") cropsData = fall;
  else cropsData = [];

  if (cropsData.length === 0) {
    scheduleTable.innerHTML = "<tr><td colspan='2'>Data tanaman tidak ditemukan 😢</td></tr>";
    return;
  }

  const schedule = generateHarvestSchedule(cropsData, 1, 30);

  // Buat header tabel
  const headerRow = document.createElement("tr");
  const dayHeader = document.createElement("th");
  dayHeader.textContent = "Hari";
  const activityHeader = document.createElement("th");
  activityHeader.textContent = "Aktivitas Panen";
  headerRow.appendChild(dayHeader);
  headerRow.appendChild(activityHeader);
  scheduleTable.appendChild(headerRow);

  // Buat baris data
  for (let day = 1; day <= 30; day++) {
    const activities = schedule[day];
    const row = document.createElement("tr");

    const dayCell = document.createElement("td");
    dayCell.textContent = day;

    const activityCell = document.createElement("td");
    if (activities.length > 0) {
      activityCell.textContent = activities.join(", ");
    } else {
      activityCell.textContent = "-";
      activityCell.style.color = "#777"; // buat beda warna kalau kosong
    }

    row.appendChild(dayCell);
    row.appendChild(activityCell);
    scheduleTable.appendChild(row);
  }
}


