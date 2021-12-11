import styles from '../styles/Home.module.css'


export const Footer=(props)=>{
    return(
        <div class="mt-5 p-4 bg-dark text-white text-center">
            <footer>
            
  
                <section class="">
                    <div class="container text-center text-md-start mt-5">
     
                        <div class="row mt-3">
        
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
       
        
        
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
                            <h6 class="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i class="fas fa-home me-3"></i> 2066, Seobu-ro, Jangan-gu, Suwon-si, Gyeonggi-do, Korea</p>
                            <p>
                            <i class="fas fa-envelope me-3"></i>
                            skkulearn@skku.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
       
                        </div>
    
                    </div>
                </section>
 
                <div class="text-center p-4">
                    © 2021 Copyright:
                <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
  
            </footer>
        </div>
    );
};