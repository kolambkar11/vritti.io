import {useState,useEffect} from "react"
// import "./styles.css";

export default function Test() {

  const [data, setData] = useState([])
  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>setData(data))
.catch(error=>console.error("error", error))
  },[]);

  console.log(data)
  return (
    <div className="App">
      <ul>
        {data.map(item=>(
            <>
                <li key={item.id}>{item.name} | {item.email} | {item.address.city}</li>
            </>
        ))}
      </ul>
    </div>
  );
}
