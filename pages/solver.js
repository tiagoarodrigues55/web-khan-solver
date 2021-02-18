import {useState, useEffect} from 'react'
import axios from 'axios'

function Solver(){
  const [subscribers, setSubscribers] = useState()
  useEffect(()=>{
    axios.get('/api/getSubscribers').then(res=>{
      setSubscribers(res.data)
      console.log(res.data)
    })
  },[])
  return(
    <div>
      {subscribers ? subscribers.map(sub=>(
        <li>{sub.username} - {sub.password}</li>
      )): null}
    </div>
  )
}
export default Solver