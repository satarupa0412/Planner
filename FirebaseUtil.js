import firebase from 'firebase/app';
import "firebase/database";

export default function FirebaseUtil() {
    
    const firebaseConfig = {
        apiKey: "AIzaSyAd-qI_6NLC4JxNa_IYqpLEpQJAe3RnBJQ",
        authDomain: "rn-planner.firebaseapp.com",
        databaseURL: "https://rn-planner-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "rn-planner",
        storageBucket: "rn-planner.appspot.com",
        messagingSenderId: "1017401746409",
        appId: "1:1017401746409:web:8b19b477ce3d5c9847a178"
      };
    
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      console.log(firebase.database().appId)

        // firebase.
        //   database()
        //   .ref('/users/123')
        //   .set({
        //     name: 'Ada Lovelace',
        //     age: 31,
        //   })
        //   .then(() => console.log('Data set.'))
        //   .catch(console.error("djsds"))

        return firebase
}