import {useState, useEffect} from "react"
import Styles from '../styles/index'
import logo from '../assets/logo.jpg'
import axios from 'axios'
import ReactWhatsapp from 'react-whatsapp'
function Home(){
  const [formData, setFormData] = useState({plan: '', name: '', username: '', password: '', school: '', transactionId: ''})
  function handleSubmit(event){
    event.preventDefault()

    if(formData.plan === '' ||formData.name === '' ||formData.username === '' ||formData.password === '' ||formData.school === '' ||formData.transactionId === '' ){
      alert('Fill in all fields before sending')
      return
    }
    axios.post('/api/subscribe', formData).then(res=>{
      alert('Your request has been successfully received!')
    })
    console.log(formData)
  }
  function handleSelectPlan(event){
    const {value} = event.target
    setFormData({plan: value, name: formData.name, username: formData.username, password: formData.password, school: formData.school, transactionId: formData.transactionId})
  }
  function handleName(event){
    const {value} = event.target
    setFormData({plan: formData.plan, name: value, username: formData.username, password: formData.password, school: formData.school, transactionId: formData.transactionId})
  }
  function handleUsername(event){
    const {value} = event.target
    setFormData({plan: formData.plan, name: formData.name, username: value, password: formData.password, school: formData.school, transactionId: formData.transactionId})
  }
  function handlePassword(event){
    const {value} = event.target
    setFormData({plan: formData.plan, name: formData.name, username: formData.username, password: value, school: formData.school, transactionId: formData.transactionId})
  }
  function handleSchool(event){
    const {value} = event.target
    setFormData({plan: formData.plan, name: formData.name, username: formData.username, password: formData.password, school: value, transactionId: formData.transactionId})
  }
  function handleTransactionId(event){
    const {value} = event.target
    setFormData({plan: formData.plan, name: formData.name, username: formData.username, password: formData.password, school: formData.school, transactionId: value})
  }
  return(
    <div>
          <Styles>
       
          <img src={logo} style={{width:"160px",height:"160px"}}/>
      <p>
      Would you like to have your KhanAcademy recommendations delivered with 100% on time every week? <br/>
       Sign up for one of our plans and stop worrying!<br/>
      </p>
      <form onSubmit={handleSubmit}>

      <select className="planos" id="planos" value={formData.plan ? formData.plan:''} onChange={handleSelectPlan} >
        <option value="">Choose a plan</option>
        <option value="Weekly">Weekly - 0.0001 BTC</option>
        <option value="Monthly">Monthly - 0.0002 BTC</option>
        <option value="Quarterly">Quarterly - 0.0004 BTC</option>
        <option value="Yearly">Yearly - 0.0008 BTC</option>
      </select><br/>
        <input type="text" onChange={handleName} placeholder="Full name" /> <br/>
        <input type="text" onChange={handleUsername} placeholder="Khan username" /> <br/>
        <input type="password" onChange={handlePassword} placeholder="Khan password" /> <br/>
        <input type="text" onChange={handleSchool} placeholder="School / University"/> <br/>
       <p>
        Bitcoin: bc1q3ujc5askpg7gm5e9zx2w5tljsht0pxfgzhh62c <br/>
        
        </p>
    <input type="text" onChange={handleTransactionId} placeholder="Transaction ID"/> <br/>

    <p>
    Any problems or questions, contact me by <br/>
    email: tiago.americano.03@gmail.com <br/>
    or by <br/>
    cell phone: +55 11 992481655 <br/>
    </p>
    {formData.plan === '' ||formData.name === '' ||formData.username === '' ||formData.password === '' ||formData.school === '' ||formData.transactionId === '' ? null:
    <ReactWhatsapp  number="+5511992481655" message={`Hello my name is ${formData.name}, I would like to sign the plan ${formData.plan}`} >Enviar</ReactWhatsapp>
    
    }
  
	<p>If you sign a plan, don't try to do the exercises! <br/> Because it can hinder the resolution process. We are not responsible for exercises not done if the user has tried to carry out the recommendations during the period covered by the plan.<br/></p>
</form>
  </Styles>

    </div>
  )
}

export default Home
