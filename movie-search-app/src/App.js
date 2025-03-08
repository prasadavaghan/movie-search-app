import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("")
  useEffect(() => {
    fetch(` https://api.tvmaze.com/search/shows?q=${value}`)
      .then((res) => res.json())
      .then((res1) => setData(res1))
      .catch((err) => { console.log("Error", err) })
  }, [value])
  console.log("Data", data)
  return (
    <div className="App">
      Movie Search
      <input style={{display:"block" ,margin:"auto"}} type="text" placeholder="Write Movie name" value={value} onChange={(e) => setValue(e.target.value)} />
      <ul>
        {data?.map((item) =>
          <li style={{ display: "flex" ,border:"1px solid black" ,justifyContent:"space-between",alignItems:"center"}} >
            <a style={{marginLeft:"20px"}} href={item.show.officialSite ? item.show.officialSite : item.show.url} target='_blank' rel='noreferrer'>
              <h6>{item.show.name}</h6>
            </a>
            <p style={{width:"50%" ,marginRight:"50px"}} dangerouslySetInnerHTML={{ __html: item.show.summary }} ></p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
