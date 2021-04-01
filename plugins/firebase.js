import * as firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCh9-4iPohRwsr5tlc588PNIZX8z9_80hY",
    authDomain: "portfolio-5b78c.firebaseapp.com",
    projectId: "portfolio-5b78c",
    storageBucket: "portfolio-5b78c.appspot.com",
    messagingSenderId: "21665699245",
    appId: "1:21665699245:web:27e69c542c97491fdc3d24",
    measurementId: "G-280E1Y60V8"
  };
  // Initialize Firebase
  let app = null;
  if(!firebase.app.length) {
      app = firebase.initializeApp(firebaseConfig);
  }

export const auth = firebase.auth()
export default firebase