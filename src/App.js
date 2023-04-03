import { useState } from "react";
import Layout from "./components/Layout";
import Editor from "./components/Editor";
import { CirclePicker } from 'react-color';

import "./index.css"
const App=()=>{
  const [width,setWidth]=useState(16);
  const[height,setHeight]=useState(16);
  const[hide,setHide]=useState(false);
  const [selected,setSelected]=useState("red");
  return(
    <>
    
   <Layout> 
    {
      !hide ? <div style={{border: "2px solid red",padding:"10px",display:"flex",flexDirection:"column",gap:"12px",justifyContent:"center",alignItems:"center"  }}>
    <h1>NFT Generator</h1>
   <label>Enter Your Label</label>
   <input 
   onChange={(e)=>setWidth(e.target.value)}
    value={width} type="number" placeholder="width" style={{padding:"4px"}}></input>
   <input 
   onChange={(e)=>setHeight(e.target.value)}
   value={height} type="number" placeholder="height" style={{padding:"4px"}}></input>
   
   </div>
   :
   <>
   
   <Editor width={width} height={height} selected={selected} 
   />
   </>
    }
   <button 
   onClick={()=>setHide(!hide)}
   style={{padding:"4px"}}>Submit</button>
   <CirclePicker onChangeComplete={(color)=>setSelected(color.hex)}></CirclePicker>
   </Layout> 
   </>
  )
}

export default App;
