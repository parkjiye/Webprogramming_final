import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { url } from '../config/next.config'
import Link from "next/link";

import { NavigationBar } from '../components/NavigationBar';
import { MainBanner } from '../components/MainBanner';
import { CourseCard } from '../components/CourseCard';
import { Footer } from '../components/Footer';

export default function Page({list}) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <NavigationBar></NavigationBar>

	  <img className={styles.banner} src="/webprogramming_banner4.png"/>
      
      <div className={styles.login} class="container-fluid">
		<div class="container">
			<h2 class="text-center" id="title">Welcome to SKKULEARN</h2>
			 <p class="text-center">
				<small id="passwordHelpInline" class="text-muted"> Enjoy our page by signing up! </small>
			</p>

			<hr></hr>
 			
			<div class="row">
				<div class="col-md-5">
 					<form role="form" method="post" action="register.php">
						<fieldset>							
							<p class="text-uppercase pull-center"> SIGN UP.</p>	
 							<div class="form-group">
								<input type="text" name="username" id="username" class="form-control input-lg" placeholder="username"/>
							</div>

							<div class="form-group">
								<input type="email" name="email" id="email" class="form-control input-lg" placeholder="Email Address"/>
							</div>
							<div class="form-group">
								<input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password"/>
							</div>
								<div class="form-group">
								<input type="password" name="password2" id="password2" class="form-control input-lg" placeholder="Password2"/>
							</div>
							{/*<div class="form-check">
								<label class="form-check-label">
								  <input type="checkbox" class="form-check-input"/>
								  By Clicking register you're agree to our policy & terms
								</label>
  </div>*/}
 							<div>
 									  <input type="submit" class="btn btn-lg btn-primary"   value="Register"/>
 							</div>
						</fieldset>
					</form>
				</div>
				
				<div class="col-md-2">
					
				</div>
				
				<div class="col-md-5">
 				 		<form role="form">
						<fieldset>							
							<p class="text-uppercase"> Login using your account: </p>	
 								
							<div class="form-group">
								<input type="email" name="username" id="username" class="form-control input-lg" placeholder="username"/>
							</div>
							<div class="form-group">
								<input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password"/>
							</div>
							<div>
								<input type="submit" class="btn btn-md" value="Sign In"/>
							</div>
								 
 						</fieldset>
				</form>	
				</div>
			</div>
		</div>
		{/*
		<p class="text-center">
			<small id="passwordHelpInline" class="text-muted"> Developer:<a href="http://www.psau.edu.ph/"> Pampanga state agricultural university ?</a> BS. Information and technology students @2017 Credits: <a href="https://v4-alpha.getbootstrap.com/">boostrap v4.</a></small>
		</p>
		*/}
	</div>
      <Footer></Footer>
    </div>
  )
}
