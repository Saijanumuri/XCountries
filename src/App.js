import React  from "react";
import { useState , useEffect} from "react";
import axios from "axios";


function App() {
  let [data,setData]=useState([[]])
  useEffect(()=>{
    axios.get("https://xcountries-backend.labs.crio.do/all")
    .then((res)=>{setData(res.data)})
    .catch((err)=>{console.error("Error fetching data: ", err)})
  },[])

  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "30px",
        background: "#f0f2f5",
        minHeight: "100vh",
      }}>
      {data.map((country)=>(
        <div   style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            background: "white",
            height: "max-content",
            width: "200px",
            borderRadius: "15px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
            textAlign: "center",
            padding: "15px",
            transition: "0.3s",
            cursor: "pointer",
          }}>
          <img src={country.flag} alt={country.abbr} style={{
              width: "120px",
              height: "80px",
              objectFit: "contain",
              borderRadius: "8px",
            }}/>
          <h2>{country.name}</h2>
        </div>
      )
      
      )}

    </div>
    
  );
}

export default App;
