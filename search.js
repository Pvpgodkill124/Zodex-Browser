const params = new URLSearchParams(window.location.search);
const query = params.get("q");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

if (query) {
  searchInput.value = query;
  fetchResults(query);
}

document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = searchInput.value.trim();
  if (q) {
    fetchResults(q);
    history.pushState({}, "", `?q=${encodeURIComponent(q)}`);
  }
});

async function fetchResults(q) {
  resultsDiv.innerHTML = "<p>Loading...</p>";
  try {
    const res = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(q)}&format=json&pretty=1`);
    const data = await res.json();

    resultsDiv.innerHTML = "";

    if (data.RelatedTopics.length === 0) {
      resultsDiv.innerHTML = "<p>No results found.</p>";
      return;
    }

    data.RelatedTopics.forEach(item => {
      if (item.Text && item.FirstURL) {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result");
        resultItem.innerHTML = `
          <h3><a href="${item.FirstURL}" target="_blank">${item.Text}</a></h3>
        `;
        resultsDiv.appendChild(resultItem);
      }
    });

  } catch (err) {
    resultsDiv.innerHTML = `<p>Error: ${err.message}</p>`;
  }
}
