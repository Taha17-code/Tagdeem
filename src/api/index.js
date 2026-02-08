import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export const getUserDetail = () => {
  return new Promise((resolve, reject) => {

    const unsubscribe = onAuthStateChanged(auth, async (userCred) => {

      unsubscribe(); // أوقف مباشرة بعد أول استجابة

      if (!userCred) {
        reject(new Error("User not authenticated"));
        return;
      }

      try {
        const uid = userCred.uid;
        const userRef = doc(db, "users", uid);

        const snap = await getDoc(userRef);

        if (snap.exists()) {
          resolve(snap.data());
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

      } catch (err) {
        reject(err);
      }
    });

  });
};
