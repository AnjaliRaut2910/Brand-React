import './App.css';
const App = () => {
  return (
    <>
      <div>
        <nav>
          <div className="logo">
            <img src="/images/brand_logo.png" alt="Nike_logo" />
          </div>
          <ul>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button>Login</button>
        </nav>
      </div>
    </>
  );
};
export default App;
