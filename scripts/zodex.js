// File: scripts/zodex.js

function performSearch() {
  const query = document.getElementById('searchBox').value.trim();
  if (query) {
    // Use Zodex Engine
    window.location.href = `https://zodex-search.vercel.app/?q=${encodeURIComponent(query)}`;
  } else {
    alert("Enter a search term.");
  }
}
