// connect to the style.css file
import './style.css'

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
  return <section>Facts List</section>;
}

export default App;