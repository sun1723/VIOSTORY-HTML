import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../style/login.css";
import { Label } from "reactstrap";
import Header from '../components/header';

const Login = () => {
     const [phoneNumber, setPhone] = useState("");
     const [password, setPassword] = useState("");
     
     
     //phone number validation
     const validatePhone = () =>{
          let phoneno = /^\d{10}$/;
          let res =  phoneNumber.value.match(phoneno) ? "phone number is valid!" : "phone number is in wrong format!" ;
          console.log(res);
     } 

     function validateForm() {
          return validatePhone  && password.length > 0;
     }


     //default submit refresh
     const handleSubmit = (e) => {
          e.preventDefault ();
     } 

     return (
          <div>
                    this is a header
               <div className="Login">
                    <form onSubmit={handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                         <Label>請輸入您的手機門號</Label>
                         <FormControl
                         autoFocus
                         type="number"
                         value={phoneNumber}
                         onChange={e => setPhone(e.target.value)}
                         />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                         <Label>請輸入密碼</Label>
                         <FormControl
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                         type="password"
                         />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!validateForm()} type="submit" onClick={console.log("login")}>
                         確認登入
                    </Button>
                    <Button block bsSize="large" disabled={!validateForm()} type="submit" onClick={console.log("login")}>
                         忘記密碼
                    </Button>
                    </form>
               </div>
          </div>
     )
}

export default Login
