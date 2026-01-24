import React from 'react';
import '../../Style/Home/WhyCV.css';
import brief from '../../assets/images/briefing.png';
import achievement from '../../assets/images/badge.png';
import selection from '../../assets/images/selection.png';

const WhyCV = () => {
  const pointsOfWhyCV = [
    {
      image: brief,
      title: 'نبذة عن المتقدم للوظيفة',
      pragraph:
        'توفر السيرة الذاتية نبذة عن المتقدم للوظيفة من جوانب مختلفة، تشمل هذه الجوانب المعلومات الشخصية والمؤهلات والخبرات الوظيفية والوظيفة الحالية والإنجازات ذات الصلة.',
    },
    {
      image: achievement,
      title: 'تلخص الإنجازات',
      pragraph:
        'بالنسبة للوظائف التي تشترط خبرة مهنية لسنوات مختلفة، يفضل ذكر الإنجازات التي حققها المتقدم خلال تاريخه الوظيفي',
    },
    {
      image: selection,
      title: 'تحديد المتقدمين المناسبين',
      pragraph:
        'تساعد السير الذاتية الجيدة من حيث الصياغة والتنظيم المتقدم للوظيفة بالانتقال إلى مرحلة المقابلة أو اختبار القدرات',
    },
  ];

  return (
    <div style={{ paddingTop: '150px', minHeight: '600px' }}>
      {/* العنوان */}
      <p style={{ fontSize: '2.5rem', fontWeight: 'bolder', textAlign: 'center', marginBottom: '50px' }}>
        لماذا السيرة الذاتية؟
      </p>

      {/* النقاط */}
      <div
        id="whycv"
        className="d-flex flex-column flex-md-row justify-content-center align-items-stretch flex-wrap gap-4 px-3"
      >
        {pointsOfWhyCV.map((item, index) => (
          <div
            key={index}
            className="point d-flex flex-column align-items-center text-center"
            style={{
              backgroundColor: '#f5f5f5',
              padding: '20px',
              borderRadius: '10px',
              flex: '1 1 300px',
              maxWidth: '350px',
            }}
          >
            {/* الدائرة التي تحتوي الأيقونة */}
            <div
              className="icon"
              style={{
                backgroundColor: '#dbe2ef',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
              }}
            >
              <img src={item.image} style={{ width: '50%', height: '50%', objectFit: 'contain' }} alt="" />
            </div>

            {/* العنوان */}
            <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px' }}>{item.title}</p>

            {/* النص */}
            <p style={{ fontSize: '1rem', color: '#3f72af', lineHeight: '1.5' }}>{item.pragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyCV;
