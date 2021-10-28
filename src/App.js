import react from "react";
import reactDom from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header1 from "./components/header 1";
import Header2 from "./header 2";

function App(){
    console.log(window.innerWidth);
    return(
        <div>
            <Header1 />
        </div>
    )
}

export default App;