import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { url } from '../config/next.config'
import Link from "next/link";

import { NavigationBar } from '../components/NavigationBar';
import { MainBanner } from '../components/MainBanner';
import { CourseCard } from '../components/CourseCard';
import { Footer } from '../components/Footer';

export default function Page({courses, titles, lectures}) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <NavigationBar></NavigationBar>
      
      <img className={styles.banner} src="/webprogramming_banner4.png"/>

      <CourseCard courses={courses}></CourseCard>
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