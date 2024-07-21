const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];


// selecting DOM elements
const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// create DOM elements: Render facts in list
factsList.innerHTML = "";

// load data from Supabase
loadFacts();

async function loadFacts() {
    const res = await fetch('https://hahltkosgrmnafwikwkl.supabase.co/rest/v1/facts', {
        headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhaGx0a29zZ3JtbmFmd2lrd2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1MjY3MjAsImV4cCI6MjAzNzEwMjcyMH0.fm8kw0IJUtwCpOwqZ9q7XTSs2m6yXMWD02TpDEDg4g4",
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhaGx0a29zZ3JtbmFmd2lrd2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1MjY3MjAsImV4cCI6MjAzNzEwMjcyMH0.fm8kw0IJUtwCpOwqZ9q7XTSs2m6yXMWD02TpDEDg4g4",
        },
    }
);
const data = await res.json();
// const filteredData = data.filter((fact) => fact.category === 'society')

createFactsList(data);
}

function createFactsList  (dataArray) {
    // loop over all facts to show on website
    const htmlArr = dataArray.map(
        (fact) => `<li class='fact'>
        <p>
            ${fact.text}
            <a 
                class="source"
                href="${fact.source}"
                target="_blank">(Source)
            </a>
        </p>
        <span class="tag"
        style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}">${fact.category}</span>
        </li>`
    );
    console.log(htmlArr);
    const html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin", html);
}

// toggle form visibility
btn.addEventListener('click', function() {

    if(form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        btn.textContent = 'Close';
    } else {
        form.classList.add('hidden');
        btn.textContent = 'Share a Post';
    }
});

[7, 64, 6, -23, 11].filter((el)=> el > 10);
