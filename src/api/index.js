import { onSnapshot } from "firebase/firestore";
import { auth } from "../config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

export const  getUserDetail =  () => {

    return new Promise((resolve, reject) => {
       /* setTimeout(() => {

            resolve({
                id: 1,
                name: 'John Doe',
                email: ''
            });
        }, 2000);*/
         const unsubsscibe = auth.onAuthStateChanged( (userCred) => {
            // console.log('User state changed:', userCred);
             
             if(userCred){
                const userdata= userCred.providerData[0];
                // console.log(userdata);
                toast.success(' تم تسجيل الدخول بنجاح ')
                resolve(userdata);
                console.log(userdata)
             }
             else{
                 reject(new Error('User not authenticated'));
             }

             // make sure to unsubscribe when done for the listener  to prevent the memory leaks
             unsubsscibe();
         }) 

    });
}