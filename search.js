
// UNIVERSAL GLOBAL ENCYCLOPEDIA SEARCH

const encyclopedia = [
    {
        title: "Technology",
        description: "Learn about computers, internet, AI and digital innovation."
    },
    {
        title: "Education",
        description: "Discover learning resources, schools and educational opportunities."
    },
    {
        title: "Business",
        description: "Explore entrepreneurship, companies, finance and business ideas."
    },
    {
        title: "Science",
        description: "Explore nature, discoveries, physics and scientific knowledge."
    },
    {
        title: "History",
        description: "Discover world history, ancient civilizations and important events."
    },
    {
        title: "Agriculture",
        description: "Learn about farming, crops, livestock and modern agriculture."
    }
];
const suggestionList =
    document.getElementById("searchSuggestions");

encyclopedia.forEach(function(item) {
    const option =
        document.createElement("option");

    option.value = item.title;

    suggestionList.appendChild(option);
});
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const searchTerm = searchInput.value
        .trim()
        .toLowerCase();

    if (searchTerm === "") {
        results.innerHTML = "<h2>Please enter a search term.</h2>";
        return;
    }

    const filteredResults = encyclopedia.filter(function(item) {

        return item.title.toLowerCase().includes(searchTerm) ||
               item.description.toLowerCase().includes(searchTerm);

    });

    if (filteredResults.length === 0) {

        results.innerHTML = `
            <h2>No results found</h2>
            <p>Try searching for another topic.</p>
        `;

        return;
    }

    results.innerHTML = "<h2>Search Results</h2>";

    filteredResults.forEach(function(item) {

        results.innerHTML += `
            <article class="result-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </article>
        `;

    });

});
searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const searchTerm = searchInput.value
        .trim()
        .toLowerCase();

    if (searchTerm === "") {
        results.innerHTML = "<h2>Please enter a search word.</h2>";
        return;
    }

    const matches = encyclopedia.filter(function(item) {
        return (
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    });

    if (matches.length > 0) {

        results.innerHTML = "<h2>Search Results</h2>";

        matches.forEach(function(item) {
            results.innerHTML += `
                <div class="result-item">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        });

    } else {

        results.innerHTML = `
            <h2>No results found</h2>
            <p>Try another search word.</p>
        `;
    }

});

