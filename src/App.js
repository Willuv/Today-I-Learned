// connect to the style.css file
import './style.css'

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

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯 ⛔️


// main component of the web page
function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          {/* main logo of the website */}
          <img src="logo.png" height="68" width="68" alt="Today I Learned Logo"/>
          {/* main header */}
          <h1>Today I Learned</h1>
        </div>
      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
    
    <NewFactForm />

    <main class="main">
      <CategoryFilter />
      <Factlist />
    </main>
  </>
  );
}

function NewFactForm(){
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return <aside>CategoryFilter</aside>;
}

function Factlist() {
  // TEMPORARY
  const facts = initialFacts;

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact)=> (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
      <p>There are {facts.length} facts in the database. Add your own!</p>
    </section>
  );
}

function Fact({ fact }){

  return (
    <li className="fact">
        <p>
            {fact.text} 
            <a 
                class="source"
                href={fact.source}
                target="_blank">(Source)
            </a>
        </p>
        <span className="tag" style={{
        backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category).color}}>
          {fact.category}</span>
        {/* reaction buttons */}
        <div className="vote-buttons">
            <button>👍 {fact.votesInteresting} </button>
            <button>🤯 {fact.votesMindblowing} </button>
            <button>⛔ {fact.votesFalse} </button>
        </div>
      </li>
  )
}

export default App;