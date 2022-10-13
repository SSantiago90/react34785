import "./App.css";

function App() {
  const title = "React Clase 3";
  const user = { name: "Santiago", curso: "React" };

  function handleClick() {
    alert("Clickeaste");
  }

  let colorTheme = "purple";

  const misEstilos = {
    marginTop: "100px",
    backgroundColor: colorTheme,
  };

  return (
    <>
      <nav>
        <ul>
          <button onClick={handleClick}>Click</button>
        </ul>
      </nav>
      <div className="App">
        <header className="App-header">
          <h2 style={misEstilos}>Bienvenidos a la clase de {title}</h2>
          <p>Usuario: {user.name}</p>
          {2 + 2}
        </header>
      </div>
      <hr />
    </>
  );
}

export default App;
