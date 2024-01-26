import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
function App() {
  const [myStyle, setMyStyle] = useState({
    color:"white",
    backgroundColor:"rgb(165, 74, 74)",
    btnText:"Light"
  });
  const toggleStyle=()=>{
      if(myStyle.color==="white"){
        setMyStyle({
          color:"black",
          backgroundColor:"bisque",
          btnText:"Dark",
        })
      }
      else{
        setMyStyle({
          color:"white",
          backgroundColor:"rgb(165, 74, 74)",
          btnText:"Light"
      })
      }
    }
  return (
    <>
      <div style={myStyle}>
        <Navbar name="TextUtility" links="Link" toggle={toggleStyle} myStyle={myStyle}/>
        <TextForm head="Text Input" myStyle={myStyle}/>
      </div>
    </>
  );
}

export default App;
