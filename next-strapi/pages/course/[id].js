import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { url } from '../../config/next.config'
import Link from "next/link";
import Router from 'next/router';

import { NavigationBar } from '../../components/NavigationBar';
import { Footer } from '../../components/Footer';
import { register } from '../firebase';

export default function Home({ course }) {
  //shows the list of lectures of the course
  const list =() =>(
    //map each item of lecture list to the li
    <div>
      {course.lectures.map((element, index) => {
        return(
          <li class="list-group-item">
            <div className={styles.courselist}>
                <div class="ms-2 me-auto">
                  <div class="fw-bold">
                    <Link href={"/lecture/" + (element.id==undefined?'landing':element.id)}>
                      <h5>{element.title}</h5>
                    </Link>
                  </div>
                  <br></br>
                  <p>{element.about}</p>
                </div>
            </div>
          </li>
        )
      })}                
                        
    </div>
  );
  
  //check whether the user registered this course or not
  const checkregister=()=>{
    var link=course.title;
    if(typeof window!=="undefined"){
      //get course value of local storage
      var output=localStorage.getItem("course");
      //if the value is an initial value, show the register button and 1 lecture preview button
      if(output=="dfdf"){
        return(
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onClick={(e) => handleClick(e)}>Register</button>
            <Link href={"/lecture/" + (course.lectures[0].id==undefined?'landing':course.lectures[0].id)}>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">1 lecture preview</button>
            </Link>
          </div>
        )
      }
      //if it is not an initial value, parse the JSON value to array
      var arr=JSON.parse(output);

      if(arr)
      
      for(var i=0; i<arr.length;i++){
        if(arr[i]==null){
          continue;
        }
        //if the course is in the registered list, do not show the register button and 1 lecture preview button
        if(arr[i]==link){
          return(
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"></div>
          )
        }
      }
      //if not, show the register button and 1 lecture preview button
      return(
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onClick={(e) => handleClick(e)}>Register</button>
          <Link href={"/lecture/" + (course.lectures[0].id==undefined?'landing':course.lectures[0].id)}>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">1 lecture preview</button>
          </Link>
        </div>
      )
    
    }
  }

  //register the course -> send the information to the firebase
  const handleClick = (e) => {
    e.preventDefault();
    //send the title of the course to the register function of firebase
    var link=course.title;
    register(link);
    //then refresh the page
    Router.reload();
    Router.push('/mypage');
   };

  return (
    <div>
      <Head>
        <title>{course.title}</title>
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
        <Footer></Footer>
    </div>
  )
}

// send GET Request to {url}/courses and get course list
export const getStaticProps = async (context) => {

  const data = await fetch(`${url}/courses/${context.params.id}`);
  const course = await data.json();

  return {
    props: { course },
    revalidate: 1,
  };
};

// send GET Request to {url}/courses and get course list
export async function getStaticPaths() {
    const res = await fetch(`${url}/courses`);
    const courses = await res.json();
  
    const paths = courses.map((item) => ({
      params: { id: item.id.toString() },
    }));
  
    return { paths, fallback: false };
  };