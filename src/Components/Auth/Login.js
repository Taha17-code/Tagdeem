import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../Style/Auth.css'
import {FaGoogle,FaGithub} from 'react-icons/fa6'
import AuthButnWithProvider from '../../Pages/Auth/AuthButnWithProvider'

const Login = () => {
  return (
    <div>
    <Row className='d-flex justify-content-between  w-100' style={{paddingTop:'150px'}}>
   
    <Col style={{paddingBottom:'50px'}}>
    <div className='loginForm'>
    
    <h2 style={{fontWeight:'bold'}}>  اهلا بك في تقديم</h2>
    <p style={{color:'#3f72af'}}>تسجيل الدخول</p>

    <AuthButnWithProvider Icon={FaGoogle} label={'المتابعة بحساب قوقل'} provider={'google'} />
    <AuthButnWithProvider Icon={FaGithub} label={'GitHub المتابعة بحساب '} provider={'github'} />
   


  
    </div>
    </Col>



   


  </Row>
    </div>
  )
}

export default Login
