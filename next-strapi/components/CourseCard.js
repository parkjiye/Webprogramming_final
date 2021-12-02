import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { url } from '../config/next.config'

export const CourseCard=(props)=>{ // props = (id, title, about, level)
    const card=()=>(
        <div className={styles.coursecard} class="row row-cols-1 row-cols-md-3 g-4">
            {props.courses.map((element, index)=>{
                return(
                    <div class="col">
                        <div class="card h-100">
                            <Link href={"/course/" + (element.id==undefined?'landing':element.id)}><img src={`${url}`+element.url} class="card-img-top" alt="..."/></Link>
                                <div class="card-body">
                                    <h5>{element.title}</h5>
                                    <p>{element.about}</p>
                                </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
    let i=0;
    return(
        card()
    );
};