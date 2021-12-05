import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { url } from '../../config/next.config'
import Link from "next/link";
import Youtube from 'react-youtube';

import { NavigationBar } from '../../components/NavigationBar';
import { MainBanner } from '../../components/MainBanner';
import { Footer } from '../../components/Footer';

export default function Home({ courses, course, titles }) {
  return (
    <div>
      <Head>
        <title></title>
      </Head>

      <NavigationBar></NavigationBar>

      <div className={styles.course} class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold">{course.lectures[0].title}</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">{course.lectures[0].about}</p>
                {/*<video style={{ width: '500px', height: '500px' }}>
                  <source src="/python.mp4" />
  </video>*/}
                <div>
                  <Youtube videoId={course.lectures[0].video_link}/>
                </div>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Register</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Go to Class</button>
                </div>
            </div>
            {/*<div class="overflow-hidden">
                <div class="container px-5">
                    <img src={`${url}`+course.logo_img.url} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                </div>
  </div>*/}

        </div>

        
      
        {/*<div>
          <h1>{course.lectures[0].title}</h1>
        </div>*/}
      
        <Footer></Footer>

    </div>
  )
}

// {url}/courses 에 GET Request 보내 course list 받아오기 (id, title, about, level)
export const getStaticProps = async (context) => {
  const data2 = await fetch(`${url}/courses`);
  const courses = await data2.json();

  const data = await fetch(`${url}/courses/${context.params.id}`);
  const course = await data.json();

  // 이거 courses에서 뽑아오고 싶은데??
  const data0 = await fetch(`${url}/courses/title`);
  const titles = await data0.json();

  return {
    props: { courses, course, titles },
    revalidate: 1,//몇 초로 할지?
  };
};

// {url}/courses에 GET Request 보내 courses id 정보 받아오기
export async function getStaticPaths() {
    const res = await fetch(`${url}/courses`);
    const courses = await res.json();
  
    const paths = courses.map((item) => ({
      params: { id: item.id.toString() },
    }));
  
    return { paths, fallback: false };
  };