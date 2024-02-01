import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark, setIsDark] = useState(false)
  // const appClass = false ? "App dark" : "App light"

  const handleModeClick = () =>{
    setIsDark(!isDark)
  }

  return (
    <div className={isDark ? "App dark": "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
