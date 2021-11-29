import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { url } from '../config/next.config'
import Link from "next/link";

import { NavigationBar } from '../components/NavigationBar';
import { MainBanner } from '../components/MainBanner';
import { CourseCard } from '../components/CourseCard';
import { Footer } from '../components/Footer';

export default function Home({list}) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <NavigationBar></NavigationBar>
      <MainBanner></MainBanner>
      <br></br>
      <CourseCard></CourseCard>
      <Footer></Footer>
      
      {/*
      <h1>Welcome home!</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link href={`/article/${item.id}`}>
              <a>{item.Title}</a>
            </Link>
          </li>
        ))}
      </ul>
        */}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetch(`${url}/articles`);
  const list = await data.json();

  return {
    props: {
      list,
    },
    revalidate: 1, 
  };
};