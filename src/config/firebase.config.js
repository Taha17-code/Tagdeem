import {getApp,getApps,initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyTDvJkm22n12b1v2I2iN-Z81PdqhMVHA",
  authDomain: "tagdeem-rusme-builder.firebaseapp.com",
  projectId: "tagdeem-rusme-builder",
  storageBucket: "tagdeem-rusme-builder.appspot.com",
  messagingSenderId: "979272762606",
  appId: "1:979272762606:web:efefb03373d794fd6c9fff"
  };
//          

const app =getApps.length>0 ? getApp():initializeApp(firebaseConfig);
const auth =getAuth(app);
const db=getFirestore(app);
export {auth,db}