import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCpWeHY1Yb-4xsVdSuf8vvi2JN2ZEaYIaQ",
  authDomain: "typescriipt-app.firebaseapp.com",
  projectId: "typescriipt-app",
  storageBucket: "typescriipt-app.appspot.com",
  messagingSenderId: "917096561753",
  appId: "1:917096561753:web:660719fb576b97d60a0548"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app