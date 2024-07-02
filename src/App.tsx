import "./App.css";
import { Setlist } from "./components/setlist";
import { setlist07062024 } from "./data/07062024/setlist-07062024.map";

function App() {
  return (
    <>
      <Setlist setList={setlist07062024}>Hello</Setlist>
    </>
  );
}

export default App;
