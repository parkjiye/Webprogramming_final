import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { url } from '../config/next.config'
import { fire } from './firebase';

import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { Mycoursecard } from '../components/Mycoursecard';

export default function Page({courses}) {
  //if the state is login, show "welcome message + user name" on the top of the course card
  const getusername=()=>{
    let username="";
    if (typeof window !== "undefined") {
      username=localStorage.getItem("user");
    }
    return(
      <div className={styles.welcome}>
        <h1>Welcome {username}!</h1>
      </div>
    )
  }

  //call the fire function of firebase.js
  fire()
  
  return (
    <div>
      <Head>
        <title>Home</title>
        
      </Head>
      <NavigationBar></NavigationBar>
      
      <img className={styles.banner} src="/webprogramming_banner.png"/>
      {getusername()}
      <Mycoursecard courses={courses}></Mycoursecard>
      <Footer></Footer>

    </div>
  )
}

// send GET Request to {url}/courses and get course list
export const getStaticProps = async () => {
  const data = await fetch(`${url}/courses`);
  const courses = await data.json();

  return {
    props: { courses },
    revalidate: 1,
  };
};