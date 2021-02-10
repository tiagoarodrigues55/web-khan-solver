import {useState, useEffect} from "react"
import Styles from '../styles/index'
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import axios from 'axios'
function Home(){
  const [formData, setFormData] = useState({plan: '', name: '', username: '', password: '', school: '', transactionId: ''})

  function handleSubmit(event){
    event.preventDefault()
    axios.post('/api/subscribe', formData).then(res=>{
      alert('Sua solicitação foi recebida com sucesso!')
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
          {/* <Image 
          alt="My Image"
          width={300}
          height={300}
          src={img}/> */}
          <img src={logo} style={{width:"160px",height:"160px"}}/>
      <p>
      Você gostaria de ter suas recomendações do KhanAcademy entregues com 100% no prazo todas as semanas?<br/>
      Assine um dos nossos planos e pare de se preocupar!<br/>
      </p>
      <form onSubmit={handleSubmit}>

      <select className="planos" id="planos" value={formData.plan ? formData.plan:''} onChange={handleSelectPlan} >
        <option value="">Escolha um plano</option>
        <option value="semanal">Semanal - R$30,00</option>
        <option value="mensal">Mensal - R$100,00</option>
        <option value="trimestral">Trimestral - R$200,00</option>
        <option value="anual">Anual - R$400,00</option>
      </select><br/>
        <input type="text" onChange={handleName} placeholder="Nome completo" /> <br/>
        <input type="text" onChange={handleUsername} placeholder="Username do khan" /> <br/>
        <input type="password" onChange={handlePassword} placeholder="Senha do khan" /> <br/>
        <input type="text" onChange={handleSchool} placeholder="Escola / Faculdade"/> <br/>
        <p>
        Para iniciarmos os processos de resolução é necessário realizar o pagamento, aceitamos:<br/>
        Pix - CPF: 368.637.608-35 <br/>
        Bitcoin*:<br/>
        *Cotação atual com desconto: R$300.000,00<br/>
        </p>
    <input type="text" onChange={handleTransactionId} placeholder="Id da transação"/> <br/>
    <button type="submit">Enviar</button>
  </form>
  </Styles>

    </div>
  )
}

export default Home