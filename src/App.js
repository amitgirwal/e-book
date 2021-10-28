import react from "react";
import reactDom from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header1 from "./components/header 1";
import Header2 from "./components/header 2";
import Home from "./components/homejs";

function App(){
    console.log(window.innerHeight);
    return(
        <div>
            <Header1 />
            <Home />
        </div>
    )
}

export default App;