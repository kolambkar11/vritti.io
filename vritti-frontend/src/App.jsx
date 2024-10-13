import {useState, useEffect} from "react"
function App() {
const [data, setData] = useState([{}])
useEffect(()=>{
  fetch("http://localhost:5000/members")
  .then(res => res.json())
  .then(data => {
    setData(data);
    console.log(data);
  })
  .catch(error => console.error('Error:', error));

},[])
  return (
    <>
      {
        (typeof data.members === 'undefined')? (
          <b>Loading...</b>
        ) : (
          data.members && data.members.map((member, index) => (
            <p key={index}>{member}</p>
          ))
        )
      }
    </>
  )
}

export default App
