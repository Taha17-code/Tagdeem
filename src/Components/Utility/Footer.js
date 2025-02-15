import React, { Fragment } from 'react'
import logo2 from '../../assets/images/2شعار تقديم.png'

const Footer = () => {
  return (
    <Fragment>
    <div style={{backgroundColor:'#3f72af',paddingTop:'150px',minHeight:'500px',textAlign:'center'}}
     id='contact'>

     <img src={logo2} style={{width:'150px',margin:'auto'}}/>
     <h6 style={{color:'#dbe2ef'}}>نحن هنا لمساعدتك في تقديم نفسك  للشركات والجهات المختصة
     بشكل يليق بإمكانياتك عبر السيرة الذاتية</h6>
    
     <h6 style={{color:'#dbe2ef'}}> taahaa.com@gmail.com</h6>
     <h6 style={{color:'#dbe2ef'}}> 00966582157155</h6>
    
      
    </div>
    <div style={{backgroundColor:'#112d4e',color:'#dbe2ef',textAlign:'center'}} > Made with ❤️ by Taha Alhaddad  2024 All rights reserved.</div>
    </Fragment>
  )
}

export default Footer
