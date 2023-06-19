import { useState } from "react";

import ChoosImage from "./components/UseEffect/ChooseImg.js";
import CheckItem from "./components/UseState/CheckItem.js";
import Content from "./components/UseEffect/Content.js";
import TodoList from "./components/UseState/TodoList.js";
import Click from "./components/UseLayoutEffect/Click.js";
import StartTime from "./components/UseRef/StartTime.js";
import AddProduct from "./components/UseMemo/AddProduct.js";
import TodoApp from "./components/UseReducer/TodoApp.js";
import Paragraph from "./components/UseContext/Paragraph.js";

export default function App() {
  const [show, setShow] = useState(false);
  const [showI, setShowI] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="App">

      {/* UseState */}
      <div style={{background:"#FAFAD2", padding: "100px"}}>
        <CheckItem />

        {/* Todo List basic */}
        <TodoList />
      </div>

      {/* UseEffect */}
      <div style={{background:"#FAF0E6", padding: "50px"}}>
        <h1>Please Click "Toggle" to Show or Hide List</h1>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Content />}


        <h1>Please Click "Toggle" to Choose Image</h1>
        <button onClick={() => setShowI(!showI)}>Toggle</button>
        {showI && <ChoosImage />}
      </div>

      <div className="App" style={{ padding: 30 }}>
        <button onClick={() => setOpen(!open)}>Toggle</button>
        {open && <Click />}
      </div>

      {/* UseMemo  */}
      {/* <AddProduct /> */}

      {/* UseRef  */}
      <StartTime />

      {/* UseReduce */}
      <TodoApp />

      {/* useContext */}
      {/* <Paragraph /> */}
    </div>
  );
}
