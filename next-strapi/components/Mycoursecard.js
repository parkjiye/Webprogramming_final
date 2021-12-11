import styles from '../styles/Home.module.css'
import Link from 'next/link'

//show the course card which user has registered
export const Mycoursecard=(props)=>{
    //props ==> course list the mypage.js sent
    const card=()=>(
        //map each item of course list to the card
        <div className={styles.coursecard} class="row row-cols-1 row-cols-md-3 g-4">
            {props.courses.map((element, index)=>{
                if(typeof window !== "undefined"){
                    //get course list from the localstorage and parse it to array
                    var output=localStorage.getItem("course");
                    var arr=JSON.parse(output);
                    
                    for(var i=0; i<arr.length;i++){
                        if(arr[i]==null){
                            continue;
                        }
                        //if the course name of the course list from firebase and course name of the course list from local storage is same,
                        //show it to the card
                        if(arr[i]==element.title){
                            let name="/webprogramming_banner"+(element.id)+".png"
                            return(
                            <div class="col">
                                <div class="card h-100">
                                    <Link href={"/course/" + (element.id==undefined?'landing':element.id)}>
                                        <img src={name} class="card-img-top" alt="..."/></Link>
                                        <div class="card-body">
                                        <h5>{element.title}</h5>
                                         <p>{element.about}</p>
                                        </div>
                                </div>
                            </div>
                            )
                        }
                    }
                }
            })}
        </div>
    );
    
    return(
        card()
    );
};

