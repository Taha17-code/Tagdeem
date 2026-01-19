import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../Style/Auth.css';
import { FaGoogle, FaGithub } from 'react-icons/fa6';
import AuthButnWithProvider from '../../Pages/Auth/AuthButnWithProvider';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import MainSpinner from '../MainSpinner';

const Login = () => {
  const navigate = useNavigate();
  const{currentUser,isLoading,isError,refetch}= useAuth();
  useEffect(() => {
    if (!isLoading && currentUser) {
      navigate("/", { replace: true });
      console.log(auth.currentUser);
    }
      
  }, [currentUser, isLoading]);
    // Check redirect result
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
           
          console.log("تم تسجيل الدخول (redirect):", result.user);
          toast.success(`مرحبًا ${result.user.displayName || result.user.email?.split('@')[0] || ''}`);
         
          navigate("/", { replace: true });
          
               }
      })
    
  if (isLoading) {
    return <MainSpinner />;
  }

  return (
    <div>
      <Row className='d-flex justify-content-between w-100' style={{ paddingTop: '150px' }}>
        <Col style={{ paddingBottom: '50px' }}>
          <div className='loginForm'>
            <h2 style={{ fontWeight: 'bold' }}>اهلا بك في تقديم</h2>
            <p style={{ color: '#3f72af' }}>تسجيل الدخول</p>

            <AuthButnWithProvider Icon={FaGoogle} label={'المتابعة بحساب قوقل'} provider={'google'} />
            <AuthButnWithProvider Icon={FaGithub} label={'GitHub المتابعة بحساب'} provider={'github'} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
