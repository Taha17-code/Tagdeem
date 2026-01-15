import React, { Fragment } from 'react'

const Steps = () => {

  const steps=[
    {number:'1',step:'تسجيل الدخول'},
    {number:'2',step:' انشئ سيرة ذاتية'},
    {number:'3',step:'اختر النموذج المناسب'},
    {number:'4',step:' املئ البيانات'},
    {number:'5',step:'حفظ'},
  ]
  return (
    <div style={{paddingTop:'100px',minHeight:'600px'}} id='steps'>
      
    <div className='d-flex justify-content-center p-5'>

    <div style={{width:'50%'}}><p style={{fontSize:'60px',fontWeight:'bolder'}}> خطوات  عمل
      سيرتك الذاتية</p></div>
  

    <div>

    {
      steps.map((item,index)=>{
      return(
        <Fragment>
       <div style={{width:'100%',margin:'20px'}}>
       <span key={index} style={{backgroundColor:'#3f72af',color:'#dbe2ef',width:'30px',height:'30px',borderRadius:'50%',display:'inline-block',
       textAlign:'center',fontSize:'25px'}}   >{item.number}</span>
       <span style={{color:'#3f72af',fontSize:'25px'}}> {item.step}</span>
       </div>
        </Fragment>
      )
      })
    }
    </div>

    </div>
    </div>
  )
}

export default Steps
