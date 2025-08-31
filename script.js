// Menu toggle
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("hidden");
});

// Search form
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if(query) {
    console.log("Search for:", query); 
    // Later: redirect to search.html?q=...
  }
});

// Clock toggle (placeholder)
const toggleClock = document.getElementById("toggleClock");
toggleClock.addEventListener("change", () => {
  if(toggleClock.checked) {
    alert("Clock enabled (will be added soon)");
  } else {
    alert("Clock disabled");
  }
});

// Weather toggle (placeholder)
const toggleWeather = document.getElementById("toggleWeather");
toggleWeather.addEventListener("change", () => {
  if(toggleWeather.checked) {
    alert("Weather enabled (will be added soon)");
  } else {
    alert("Weather disabled");
  }
});
