import { useContext } from "react";
import { userContext } from "./App";

function ChildD() {
  
    const{userName, setUsername} = useContext(userContext);

    return(
        <div>
            <h1> {userName} </h1>
            <button onClick={ () => setUsername("The Name Has Been Updated, Dear Customer")}>Update Name</button>
        </div>
    );
}

export default ChildD;