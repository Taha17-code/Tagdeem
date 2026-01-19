import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// إعدادات مشروع Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDyTDvJkm22n12b1v2I2iN-Z81PdqhMVHA",
  authDomain: "tagdeem-rusme-builder.firebaseapp.com",
  projectId: "tagdeem-rusme-builder",
  storageBucket: "tagdeem-rusme-builder.appspot.com",
  messagingSenderId: "979272762606",
  appId: "1:979272762606:web:efefb03373d794fd6c9fff",
};

// تهيئة التطبيق (إذا لم يكن موجود مسبقًا)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// تهيئة Auth و Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// // تفعيل persistence (يبقى مسجل بعد إعادة التحميل)
// setPersistence(auth, browserLocalPersistence)
//   .then(() => console.log("Firebase persistence: Local"))
//   .catch((err) => console.log("Firebase persistence error:", err.message));

export { auth, db };
