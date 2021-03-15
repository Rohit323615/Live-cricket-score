import Navbar from './Components/Navbar'
import {getMatches,getOldMatches} from './API/Api'
import {useState,useEffect} from 'react'

function App() {

const [matches,setMacthes]=useState([])
const [oldMatches,setOldMatches]=useState([])

useEffect(()=>{
  {getMatches().then((res)=>setMacthes(res.matches)).catch((err)=>console.log(err))}
  {getOldMatches().then((res)=>setOldMatches(res.data)).catch((err)=>console.log(err))}
},[])

  return (
    <div className="App">
      <Navbar matches={matches} oldMatches={oldMatches}/>
    </div>
  );
}

export default App;
