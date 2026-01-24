import React, { Fragment } from 'react';

const Steps = () => {
  const steps = [
    { number: '1', step: 'تسجيل الدخول' },
    { number: '2', step: 'انشئ سيرة ذاتية' },
    { number: '3', step: 'اختر النموذج المناسب' },
    { number: '4', step: 'املئ البيانات' },
    { number: '5', step: 'حفظ' },
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '600px' }} id="steps">
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-start p-5 gap-4">

        {/* العنوان */}
        <div className="text-center text-md-start" style={{ width: '100%', maxWidth: '700px' }}>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bolder', lineHeight: '1.2' }}>
            خطوات عمل سيرتك الذاتية
          </p>
        </div>

        {/* خطوات العمل */}
        <div className="d-flex flex-column gap-3" style={{ width: '100%', maxWidth: '500px' }}>
          {steps.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center gap-3"
              style={{ marginBottom: '10px' }}
            >
              <span
                style={{
                  backgroundColor: '#3f72af',
                  color: '#dbe2ef',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  flexShrink: 0,
                }}
              >
                {item.number}
              </span>
              <span style={{ color: '#3f72af', fontSize: '1.25rem' }}>{item.step}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Steps;
