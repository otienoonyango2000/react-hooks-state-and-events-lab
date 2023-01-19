import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState(true);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"
  function togg(e){
    setMode(!mode)

  }


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={togg}>{Boolean(mode)? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
