import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const CourseCard=(props)=>{
    //props ==> course list the course.js & index.js sent
    const card=()=>(
        //map each item of course list to the card
        <div className={styles.coursecard} class="row row-cols-1 row-cols-md-3 g-4">
            {props.courses.map((element, index)=>{
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
            })}
        </div>
    );

    return(
        card()
    );
};

