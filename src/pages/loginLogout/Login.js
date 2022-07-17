import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AuthCardLayout from './components/AuthCardLayout';


const Login = () => {
  return (
    <AuthCardLayout
      leftSideContent=''
      footer={true}
      titleHeader="PonteHouse"
      titleDescription="Autentique-se e aceda a toda a informação sobre o armazém de produtos da Casa da Ponte."
      titlePath="/public/login">
      <h3>Login</h3>
      <LoginForm layout="card" hasLabel />
    </AuthCardLayout>
  );
};

export default Login;
