import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const CourseCard=(props)=>{ // props = (id, title, about, level)
    let i=0;
    return(
        <div className={styles.coursecard} class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <Link href={"/course/" + (props.courses[i].id==undefined?'landing':props.courses[i].id)}><img src="/webprogramming_banner1.png" class="card-img-top" alt="..."/></Link>
                    <div class="card-body">
                        <h5>{props.courses[i].title}</h5>
                        <p>{props.courses[i++].about}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <Link href={"/course/" + (props.courses[i].id==undefined?'landing':props.courses[i].id)}><img src="/webprogramming_banner2.png" class="card-img-top" alt="..."/></Link>
                    <div class="card-body">
                        <h5>{props.courses[i].title}</h5>
                        <p>{props.courses[i++].about}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="/webprogramming_banner3.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5>{props.courses[i].title}</h5>
                        <p>{props.courses[i++].about}</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};