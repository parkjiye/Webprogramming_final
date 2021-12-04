// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth,// authentication 설정
    signInWithEmailAndPassword,// email 로그인
    createUserWithEmailAndPassword, //email 회원가입
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMQ1Z0KbAm_8X4hPxrWdZDYeTySQLcd6o",
  authDomain: "web-final-96746.firebaseapp.com",
  projectId: "web-final-96746",
  storageBucket: "web-final-96746.appspot.com",
  messagingSenderId: "428806458821",
  appId: "1:428806458821:web:e0f798dc82d1c54dcc0fac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 설정
const auth = getAuth();

//Email 로그인
export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};