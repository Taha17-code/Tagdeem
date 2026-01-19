import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
export const getUserDetail = () => {
  return new Promise((resolve, reject) => {

    const unsubscribeAuth = auth.onAuthStateChanged(async (userCred) => {

      if (!userCred) {
        reject(new Error("User not authenticated"));
        unsubscribeAuth();
        return;
      }

      const uid = userCred.uid; // الصحيح
      const userRef = doc(db, "users", uid);

      try {
        const unsubscribeSnapshot = onSnapshot(userRef, async (_doc) => {

          if (_doc.exists()) {
            resolve(_doc.data());
          } else {
            const userData = {
              uid,
              name: userCred.displayName || "",
              email: userCred.email || "",
              photoURL: userCred.photoURL || "",
              provider: userCred.providerData[0]?.providerId
            };

            await setDoc(userRef, userData);
            resolve(userData);
          }

          unsubscribeSnapshot(); // وقف listener
        });

        toast.success("تم تسجيل الدخول بنجاح");

      } catch (err) {
        reject(err);
      }

      unsubscribeAuth(); // وقف auth listener
    });

  });
};
