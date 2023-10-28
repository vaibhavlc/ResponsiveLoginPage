import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  background: linear-gradient(to bottom, #3494e6, #ec6ead);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  color: #3494e6;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: #3494e6;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: linear-gradient(to right, #3494e6, #ec6ead);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(to right, #ec6ead, #3494e6);
  }

`;
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-weight: light;
  font-size:12px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
  pointer:cursor;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <LoginContainer>
            <LoginForm onSubmit={handleLogin}>
                <Title>Login</Title>
                <Input
                    type="email"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <CheckboxLabel>
                    <Checkbox
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    Remember me
                </CheckboxLabel>
                <CheckboxLabel>
                    <Checkbox
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={() => setAgreeToTerms(!agreeToTerms)}
                    />
                    <a href=''>Agree to Terms and Conditions</a>
                </CheckboxLabel>
                <br></br>
                <Button type="submit">Login</Button>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
