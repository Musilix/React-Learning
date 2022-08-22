import "./App.css";
import BoxList from "./components/BoxList/BoxList";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <section>
          {/* <BoxForm></BoxForm> */}
          <BoxList></BoxList>
        </section>
      </main>
    </div>
  );
}

export default App;
