import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { url } from '../config/next.config'
import Link from "next/link";
import { fire } from './firebase';
import Router from 'next/router';


import { NavigationBar } from '../components/NavigationBar';
import { MainBanner } from '../components/MainBanner';
import { CourseCard } from '../components/CourseCard';
import { Footer } from '../components/Footer';
import { Mycoursecard } from '../components/Mycoursecard';

{/*
    local storage에 저장된 유저 정보로 firebase에서 수강한 강좌 제목만 가져오기(화)
   course strapi에서 map 할 때 제목 있는 강좌만 가져와서 보여주기(수)

   ****************************

   강좌 Register 누르면 firebase에 강좌 추가해주기 -> 이미 있는거면 경고 메시지(금~토요일) -> 채연
   
   ****************************

   footer 완성하기(금)
   strapi 강좌 데이터 정리하기(금, 토요일)

   ****************************

   보고서 쓰기(토요일, 일요일) -> 같이
   영상 찍기(일요일 새벽) -> 같이

*/}

export default function Page({courses, titles, lectures}) {

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
  fire()
  
  return (
    <div>
      <Head>
        <title>Home</title>
        
      </Head>
      <NavigationBar></NavigationBar>
      
      <img className={styles.banner} src="/webprogramming_banner4.png"/>
      {getusername()}
      <Mycoursecard courses={courses}></Mycoursecard>
      <Footer></Footer>

    </div>
  )
}

// {url}/courses 에 GET Request 보내 course list 받아오기 (id, title, about, level)
export const getStaticProps = async () => {
  const data = await fetch(`${url}/courses`);
  const courses = await data.json();

  // 이거 courses에서 뽑아오고 싶은데??
  const data0 = await fetch(`${url}/courses/title`);
  const titles = await data0.json();

  const LEC = await fetch(`${url}/courses/1`);
  const lectures = await LEC.json();

  return {
    props: { courses, titles, lectures },
    revalidate: 1,//몇 초로 할지?
  };
};