import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from "../../hooks/useForm"

function MainPage() {
  const [form, onChangeForm] = useForm({nome: "", idade: "", email: "", profissao:""});
  
  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")


  //unificação do form
  // const [form, setForm] = useState({nome: "", idade: "", email: ""})


  // const onChangeForm = (event) => {
  //   console.log(event.target);
  //   const { name, value } = event.target;
  //   console.log(name,value);
  //   const novoForm ={
  //     ...form,
  //     [name]: value
  //   };
  //   setForm(novoForm);
  // }

  // const onChangeNome = (event) => {
  //   setNome({ ...form, nome: event.target.value })
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);
    //console.log(`nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email} `)
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          pattern="[A-Za-z]{3,}"
          title="É preciso que o nome tenha pelo menos 3 letras"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          type="number"
          id="idade"
          name="idade"
          value={form.idade}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="envie o email no formato email@email.com"
          id="email"
          name="email"
          value={form.email}
          onChange={onChangeForm}
          required
        />

        <label htmlFor="email">Profissão:</label>
        <Input 
          id="profissao"
          name="profissao"
          value={form.profissao}
          onChange={onChangeForm}
          required
        />
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
