import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { url } from '../config/next.config'

import { NavigationBar } from '../components/NavigationBar';
import { CourseCard } from '../components/CourseCard';
import { Footer } from '../components/Footer';

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

  return (
    <div>
      <Head>
        <title>Courses</title>
      </Head>
      <NavigationBar></NavigationBar>
      <img className={styles.banner} src="/webprogramming_banner.png"/>
      {getusername()}
      <CourseCard courses={courses}></CourseCard>
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