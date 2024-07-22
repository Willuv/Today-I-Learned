// connect to the style.css file
import './style.css'

function App() {
  return (
    <header className="header">
      <div className="logo">
        {/* main logo of the website */}
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo"/>
        {/* main header */}
        <h1>Today I Learned</h1>
      </div>
    <button className="btn btn-large btn-open">Share a fact</button>
  </header>
  );
}

export default App;