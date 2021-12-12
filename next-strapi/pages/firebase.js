// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth,// authentication
    signInWithEmailAndPassword,// email login
    createUserWithEmailAndPassword, //email sign up
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

// set auth
const auth = getAuth();

//Email login function
export const signupEmail = (email, password) => {
  //initialize the course item as "dfdf"
  if(typeof window !== "undefined"){
    localStorage.setItem("course", "dfdf");
  }
  //return the result of the login
  return createUserWithEmailAndPassword(auth, email, password);
};

//Email signup
export const loginEmail = (email, password) => {
  //initialize the course item as "dfdf"
  if(typeof window !== "undefined"){
    localStorage.setItem("course", "dfdf");
  }
  //return the result of the login
  return signInWithEmailAndPassword(auth, email, password);
};

// Course(title) register function
export const register=(title)=>{
  var database=getDatabase(app);
  if(typeof window !== "undefined"){
    //get current login user email from localstorage and substring it before '@'
    var user=localStorage.getItem("user");
    var result=user.substring(0,user.lastIndexOf("@"));

    //if the course local storage is initial state, set the title of course of the user on the firebase
    if(localStorage.getItem("course")=="dfdf"){
      localStorage.removeItem("course");
      update(ref(database, `users/${result}`),{
        course: [title],
      });
      fire();
    }
    //if the course local storage is not initial state, update the course list with new course on the firebase
    else{
      var arr=JSON.parse(localStorage.getItem("course"));
      arr[arr.length]=title;
      update(ref(database, `users/${result}`),{
      course:arr,
    });
    fire();
    }
  }
}

//get the courses which user has registered
export const fire=()=>{
    if(typeof window !== "undefined"){
      //get current login user email from localstorage and substring it before '@'
      var user=localStorage.getItem("user");
      var result=user.substring(0,user.lastIndexOf("@"));

      //get the course list of user which is saved on the firebase
      const dbRef=ref(getDatabase());
      get(child(dbRef, `users/${result}`)).then((snapshot)=>{
        if(snapshot.exists()){
          localStorage.setItem("course", JSON.stringify(snapshot.val().course));
        }else{
          //console.log('nono');
        }
      }).catch((error)=>{
        console.error(error);
      })
    }
}
