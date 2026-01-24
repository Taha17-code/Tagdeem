import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import '../../Style/Auth.css';
import { GoogleAuthProvider, GithubAuthProvider, signInWithRedirect, signInWithPopup ,  fetchSignInMethodsForEmail, linkWithCredential } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { toast } from 'react-toastify';

// أنشئ المزودين مرة واحدة خارج الدالة لتجنب إعادة الإنشاء في كل مرة
const googleProvider = new GoogleAuthProvider();
// إضافة إعدادات لإجبار اختيار الحساب
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

const githubProvider = new GithubAuthProvider();
// إضافة إعدادات للسماح بتسجيل حساب جديد إذا لزم الأمر
githubProvider.setCustomParameters({
  allow_signup: 'true'
});



const AuthButnWithProvider = ({ Icon, label, provider }) => {
  const [authInProgress, setAuthInProgress] = useState(false);

  const handleClick = async () => {
  try {
    switch (provider) {
      case "google":
        await signInWithPopup(auth, googleProvider);
        break;

      case "github":
        await signInWithPopup(auth, githubProvider);
        break;

      default:
        console.log('Provider غير معروف');
    }
  } catch (err) {
    //  معالجة الخطأ لربط الحسابات اذا كان الايميل في اكثر من منصه متكرر  
    if (err.code === 'auth/account-exists-with-different-credential') {
      const email = err.customData.email;
      const pendingCred = err.credential;

      try {
        const methods = await fetchSignInMethodsForEmail(auth, email);

        // لو الحساب الأصلي Google
        if (methods.includes(GoogleAuthProvider.PROVIDER_ID)) {
          toast.info('هذا الإيميل مسجل عبر Google، سيتم ربط GitHub بالحساب');

          const result = await signInWithPopup(auth, googleProvider);
          await linkWithCredential(result.user, pendingCred);

          toast.success('تم ربط حساب GitHub بنجاح 🎉');
        }

        // لو الحساب الأصلي GitHub (نادر لكنه ممكن)
        if (methods.includes(GithubAuthProvider.PROVIDER_ID)) {
          toast.info('هذا الإيميل مسجل عبر GitHub، سيتم ربط Google بالحساب');

          const result = await signInWithPopup(auth, githubProvider);
          await linkWithCredential(result.user, pendingCred);

          toast.success('تم ربط حساب Google بنجاح 🎉');
        }
      } catch (linkError) {
        toast.error('فشل ربط الحسابات');
        console.error(linkError);
      }
    } else {
      console.error(err);
      toast.error(`حدث خطأ أثناء تسجيل الدخول`);
    }
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
