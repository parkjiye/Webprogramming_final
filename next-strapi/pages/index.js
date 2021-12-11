import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { url } from '../config/next.config'

import { NavigationBar } from '../components/NavigationBar';
import { MainBanner } from '../components/MainBanner';
import { CourseCard } from '../components/CourseCard';
import { Footer } from '../components/Footer';


export default function Home({ courses }) {
  //initialize the localstorage of course
  const initialize=()=>{
    if(typeof window !== "undefined"){
      if(localStorage.getItem("course")==undefined){
        localStorage.setItem("course", "dfdf");
      }
    }
  }
  
  return (
    <div className={styles.main}>
      <Head>
        <title>Home</title>
      </Head>
      {initialize()}
      <NavigationBar></NavigationBar>
      <MainBanner></MainBanner>
      <br></br>
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