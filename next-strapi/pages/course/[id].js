import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { url } from '../../config/next.config'
import Link from "next/link";
import Router from 'next/router';


import { NavigationBar } from '../../components/NavigationBar';
import { MainBanner } from '../../components/MainBanner';
import { Footer } from '../../components/Footer';
import { register } from '../firebase';


export default function Home({ courses, course, titles }) {
  let i=1;
  const list =() =>(
    <div>
      {course.lectures.map((element, index) => {
        return(
          <li class="list-group-item">
            <div className={styles.courselist}>
                <div class="ms-2 me-auto">
                  <div class="fw-bold"><Link href={"/lecture/" + (element.id==undefined?'landing':element.id)}><h5>{element.title}</h5></Link></div>
                  <br></br>
                  <p>{element.about}</p>
                </div>
            </div>
          </li>
        )
      })}                
                        
    </div>
  );

  const checkregister=()=>{
    var link=course.title;
    if(typeof window!=="undefined"){
      var output=localStorage.getItem("course");
      if(output=="dfdf"){
        return(
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onClick={(e) => handleClick(e)}>Register</button>
          <Link href={"/lecture/" + (course.lectures[0].id==undefined?'landing':course.lectures[0].id)}><button type="button" class="btn btn-outline-secondary btn-lg px-4">1 lecture preview</button></Link>
          </div>
        )
      }
      var arr=JSON.parse(output);
      //console.log(arr[0]);
      for(var i=0; i<arr.length;i++){
        if(arr[i]==null){
          continue;
        }
        if(arr[i]==link){
          return(
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            
            </div>
          )
        }
        
      
      }
      return(
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onClick={(e) => handleClick(e)}>Register</button>
          <Link href={"/lecture/" + (course.lectures[0].id==undefined?'landing':course.lectures[0].id)}><button type="button" class="btn btn-outline-secondary btn-lg px-4">1 lecture preview</button></Link>
        </div>
      )
    
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    var link=course.title;
    register(link);
    Router.push('/mypage');
    
   };

  return (
    <div>
      <Head>
        <title></title>
      </Head>

      <NavigationBar></NavigationBar>

      <div className={styles.course} class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold">{course.title}</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">{course.about}</p>
                {checkregister()}
            </div>
            
            <div class="overflow-hidden">
                <div class="container px-5">
                    <img src={`${url}`+course.logo_img.url} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
                </div>
            </div>
            
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="true" href="#">Lectures</a>
                    </li>
                    </ul>
                </div>
                
                {list()}

            </div>
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