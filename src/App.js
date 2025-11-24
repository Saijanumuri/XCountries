import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  let [data, setData] = useState([[]])
  let [search, setSearch] = useState("")
  useEffect(() => {
    axios.get("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => { console.error("Error fetching data: ", err) })
  }, [])
  const filteredData = data.filter((item) =>
    (item.common || "").toLowerCase().includes(search.toLowerCase())

  );
  console.log(search)

  console.log(data)
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input onChange={(e) => setSearch(e.target.value)} style={{ width: "500px", height: "30px", marginBottom: "10px" }} type="text" placeholder="Search for Countries" />
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "30px",
        background: "#f0f2f5",
        minHeight: "100vh",
      }}>
        {filteredData.map((country) => (
          <div className="countryCard">
            <img src={country.png}  style={{
              width: "120px",
              height: "80px",
              objectFit: "contain",
              borderRadius: "8px",
            }} />
            <h2>{country.common}</h2>
          </div>
        )

        )}

      </div>
    </div>

  );
}

export default App;
