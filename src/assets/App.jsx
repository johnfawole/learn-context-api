import { useState, useEffect, createContext } from "react";
import "./App.css";
import ChildA from "./ChildA";

export const userContext = createContext (null)

 function App()  {
  const[userName, setUsername] = useState("John of Blockchain Alpha");

  return (
    <userContext.Provider value = {{userName, setUsername}}>
      <div>
        <ChildA />
      </div>
    </userContext.Provider>
  )
 }

  export default App;