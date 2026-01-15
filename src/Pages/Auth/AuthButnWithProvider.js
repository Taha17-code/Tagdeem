import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import '../../Style/Auth.css';
import { GoogleAuthProvider, GithubAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { toast } from 'react-toastify';

// أنشئ المزودين مرة واحدة خارج الدالة لتجنب إعادة الإنشاء في كل مرة
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthButnWithProvider = ({ Icon, label, provider }) => {

  const handleClick = async () => {
    try {
      switch (provider) {
        case "google":
          // فقط نفذ redirect، لا تستخدم then هنا
          await signInWithRedirect(auth, googleProvider);
          break;

        case "github":
          await signInWithRedirect(auth, githubProvider);
          break;

        default:
          console.log('Provider غير معروف');
      }
    } catch (err) {
      // إصلاح خطأ الكتابة
      console.log(`Error: ${err.message}`);
      toast.error(`حدث خطأ أثناء تسجيل الدخول: ${err.message}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className='d-flex justify-content-between items-center border border-dark p-2 m-3 btns'
      style={{ cursor: 'pointer' }}
    >
      <FaChevronRight />
      <p>{label}</p>
      <Icon />
    </div>
  );
};

export default AuthButnWithProvider;
