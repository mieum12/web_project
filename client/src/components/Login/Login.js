import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FloatingLabel } from 'react-bootstrap';
import axios from 'axios';

function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  const loginHandler = (e) => {
    e.preventDefault();

    //데이터를 받아오기 때문에 post
    
    axios.get("/api/signin",{email:email,password:password})
      .then((res) => {
        console.log('성공');
      }).catch((err) => {console.log(err)})
  }

  return (
    <Wrap>
      <FloatingLabel controlId='floatingEmail' label='email' className='mb-3' onChange={(e) => setEmail(e.target.value)}>
        <Form.Control type="email" />
      </FloatingLabel>
      <FloatingLabel controlId='floatingPassword' label='password' className='mb-3' onChange={(e) => setPassword(e.target.value)}>
        <Form.Control type="password" />
      </FloatingLabel>
      <ButtonWrap>
        <Button type="submit" onClick={loginHandler}>Login</Button>
        <Link to='/join'><Button type='submit'>Join</Button></Link>
      </ButtonWrap>
    </Wrap>
  )
}


// function Login() {
//   return (
//     <>
//     <Head>
//     </Head>
//       <Form style={{ padding : '30px',display : 'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
//         <Form.Group style={{width:'70vh'}} className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>
//         <Form.Group style={{width:'70vh'}} className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </>
//   )
// }

export default LoginForm;

const Wrap = styled.div `
  display : flex;
  flex-direction : column;
  justify-content : center;
  
  padding-top : 30px;
  width : 1653px;

`

const ButtonWrap = styled.div`
  display : flex;
  justify-content : center;

  Button {
    margin-right : 20px;
    
    background-color : #6c757d;
    border-color : #6c757d;
    border-radius : 5px;

    font-size : 15px;
  }
`