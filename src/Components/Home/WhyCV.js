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
      title:'تحديد المتقدمينالمناسبين',
      pragraph:'تساعد السير الذاتية الجيدة من حيث الصياغة والتنظيم المتقدم للوظيفة بالانتقال إلى مرحلة المقابلة أو اختبار القدرات'

    }
   
  ]

  return (
    <div style={{width:'100%',margin:'20px'}} >

    <div id='whycv' key={index}>
    {
      pointsOfWhyCV.map((item,index)=>{
        return(
          <div>
           <div><img src={item.image}/></div>
           </div>
        )
      })
    }
    </div>
     
      
    </div>
  )
}

export default WhyCV
