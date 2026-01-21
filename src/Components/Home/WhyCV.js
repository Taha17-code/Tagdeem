import React from 'react'
import '../../Style/Home/WhyCV.css'
import brief from '../../assets/images/briefing.png'
import achievement from '../../assets/images/badge.png'
import selection from '../../assets/images/selection.png'

const WhyCV = () => {

  const pointsOfWhyCV =[
    {
      image:brief,
      title:' نبذة عن المتقدم للوظيفة' ,
      pragraph:'توفر السيرة الذاتية نبذة عن المتقدم للوظيفة من جوانب مختلفة، تشمل هذه الجوانب المعلومات الشخصية والمؤهلات والخبرات الوظيفية والوظيفة الحالية والإنجازات ذات الصلة.',

    },
    {
      image:achievement,
      title:'تلخص الإنجازات',
      pragraph:'بالنسبة للوظائف التي تشترط خبرة مهنية لسنوات مختلفة، يفضل ذكر الإنجازات التي حققها المتقدم خلال تاريخه الوظيفي'

    },
    {
      image:selection,
      title:'تحديد المتقدمين المناسبين',
      pragraph:'تساعد السير الذاتية الجيدة من حيث الصياغة والتنظيم المتقدم للوظيفة بالانتقال إلى مرحلة المقابلة أو اختبار القدرات'

    }
   
  ]

  return (
    <div style={{paddingTop:'150px',minHeight:'600px'}}  >

    <p style={{fontSize:'50px',fontWeight:'bolder',textAlign:'center'}}>لماذا السيرة الذاتية ؟</p>

    <div id='whycv'>
    {
      pointsOfWhyCV.map((item,index)=>{
        return(
          <div  className="point" key={index}>
       <div className='icon'><img src={item.image} /></div>

       <div> <p style={{fontSize:'20px',fontWeight:'bold'}}>{item.title}</p></div>

       <div> <p style={{fontSize:'15px',color:'#3f72af'}}>{item.pragraph}</p></div>

           </div>

           
        )
      })
    }
    </div>
     
      
    </div>
  )
}

export default WhyCV
