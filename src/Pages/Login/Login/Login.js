import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {

   const navigate = useNavigate();

   const emailRef = useRef("");
   const pwdRef = useRef("");

   const handleSubmit = (event) => {
      event.preventDefault();

      const email = emailRef.current.value;
      const pwd = pwdRef.current.value;
   }

   const goRegister = () => {
      navigate(`/register`);
   }

   return (
      <div className='login_form__section'>
         <div className="container">
            <h2 className="py-5 text-center">Please Login</h2>
            <div className="row">
               <div className="col-sm-12 col-lg-4 col-md-6 mx-auto">
                  <Form onSubmit={handleSubmit} className="mb-4">
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                        </Form.Text>
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={pwdRef} placeholder="Password" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                     </Form.Group>

                     <Form.Group className='text-center'>
                        <Button variant="primary" type="submit">
                           Login
                        </Button>
                     </Form.Group>

                  </Form>
               </div>

               <p className='text-center'>New to genius car ? <span className="text-danger" style={{ cursor: "pointer" }} onClick={goRegister}>Please Register</span></p>
            </div>
         </div>
      </div>
   );
};

export default Login;