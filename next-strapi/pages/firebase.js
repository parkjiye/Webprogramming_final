// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth,// authentication 설정
    signInWithEmailAndPassword,// email 로그인
    createUserWithEmailAndPassword, //email 회원가입
} from "firebase/auth";

import { getDatabase, ref, set, child, get, update } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMQ1Z0KbAm_8X4hPxrWdZDYeTySQLcd6o",
  authDomain: "web-final-96746.firebaseapp.com",
  databaseURL: "https://web-final-96746-default-rtdb.asia-southeast1.firebasedatabase.app",
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
  if(typeof window !== "undefined"){
    localStorage.setItem("course", "dfdf");
  }
  return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
  if(typeof window !== "undefined"){
    localStorage.setItem("course", "dfdf");
  }
  return signInWithEmailAndPassword(auth, email, password);
};

export const register=(title)=>{
  var database=getDatabase(app);
    //database.ref('test/').set({"name": "테스트2", "intro": "인삿말"})
  if(typeof window !== "undefined"){
    var user=localStorage.getItem("user");
    var result=user.substring(0,user.lastIndexOf("@"));
    if(localStorage.getItem("course")=="dfdf"){
      localStorage.removeItem("course");
      update(ref(database, `users/${result}`),{
        course: [title],
      });
    }
    else{
      var arr=JSON.parse(localStorage.getItem("course"));
      arr[arr.length]=title;
      //var result2=user.substring(result);
      update(ref(database, `users/${result}`),{
      course:arr,
    });
    }
  }
}

export const fire=()=>{
  var database=getDatabase(app);
    //database.ref('test/').set({"name": "테스트2", "intro": "인삿말"})
    if(typeof window !== "undefined"){
      var user=localStorage.getItem("user");
      var result=user.substring(0,user.lastIndexOf("@"));
      const dbRef=ref(getDatabase());
      get(child(dbRef, `users/${result}`)).then((snapshot)=>{
        if(snapshot.exists()){
          localStorage.setItem("course", JSON.stringify(snapshot.val().course));
        }else{
          console.log('nono');
        }
      }).catch((error)=>{
        console.error(error);
      })
    }
    
    //console.log("firebase");
}
