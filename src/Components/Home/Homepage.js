import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Home/Homepage.css';
import { auth, db } from '../../config/firebase.config';
import { doc, setDoc } from "firebase/firestore";
import ResumeGif from '../../assets/images/Resume folder (1).gif';

const Homepage = () => {
  useEffect(() => {
    const testFirestore = async () => {
      const user = auth.currentUser;
      if (!user) return;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: user.displayName
      });
      console.log("🔥 FIRESTORE WRITE SUCCESS");
    };
    testFirestore();
  }, []);

  return (
    <div style={{ backgroundColor: '#3f72af', minHeight: '600px' }}>
      <div className='d-flex flex-column flex-md-row justify-content-center align-items-center p-5 gap-4'>
        
        {/* النصوص + الأزرار */}
        <div className='text-center text-md-end'>
          <p id='headlineOne'  style={{ color: '#dbe2ef', fontSize: '1.8rem', lineHeight: '1.4' }}>
            أظهر إمكانياتك وكل مالديك ليراك العالم
          </p>
          <p style={{ color: '#dbe2ef', wordBreak: 'break-word', fontSize: '1rem', lineHeight: '1.5' }}>
            نحن هنا لمساعدتك في تقديم نفسك للشركات والجهات المختصة بشكل يليق بإمكانياتك عبر السيرة الذاتية
          </p>

          <div className='d-flex flex-column flex-sm-row gap-3 mt-3 justify-content-center justify-content-md-start'>
            <p className='homeButton' style={{ border: '2px #dbe2ef solid', color: '#dbe2ef', padding: '10px 20px', cursor: 'pointer' }}>
              تواصل معنا
            </p>

            <Link to={'/login'}>
              <p className='homeButton' style={{ border: '2px #112d4e solid', backgroundColor: '#112d4e', color: '#dbe2ef', padding: '10px 20px', cursor: 'pointer' }}>
                انشئ سيرة ذاتية
              </p>
            </Link>
          </div>
        </div>

        {/* الصورة / GIF */}
        <div className='d-flex justify-content-center'>
          <img src={ResumeGif} style={{ maxWidth: '100%', height: 'auto' }} alt="Resume Gif" />
        </div>

      </div>
    </div>
  );
};

export default Homepage;
