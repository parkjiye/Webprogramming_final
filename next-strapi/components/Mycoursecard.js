import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { url } from '../config/next.config'

export const Mycoursecard=(props)=>{ // props = (id, title, about, level)
    
    const card=()=>(
        
        <div className={styles.coursecard} class="row row-cols-1 row-cols-md-3 g-4">
            
            {props.courses.map((element, index)=>{
                if(typeof window !== "undefined"){
                    var output=localStorage.getItem("course");
                    console.log(localStorage.getItem("course"));
                    var arr=JSON.parse(output);
                    //console.log(arr[0]);
                    for(var i=0; i<arr.length;i++){
                        if(arr[i]==null){
                            continue;
                        }
                        if(arr[i]==element.title){
                            let name="/webprogramming_banner"+(element.id)+".png"
                            return(
                            <div class="col">
                                <div class="card h-100">
                                    <Link href={"/course/" + (element.id==undefined?'landing':element.id)}><img src={name} class="card-img-top" alt="..."/></Link>
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

