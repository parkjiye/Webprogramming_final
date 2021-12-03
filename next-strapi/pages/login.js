import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { url } from '../config/next.config'
import Link from "next/link";

import { NavigationBar } from '../components/NavigationBar';
import { MainBanner } from '../components/MainBanner';
import { CourseCard } from '../components/CourseCard';
import { Footer } from '../components/Footer';
import { loginEmail, signupEmail } from './firebase.js';

export default function Page({list, auth}) {
	const signUp = async event => {
		event.preventDefault();
		console.log(event.target.signup_email.value);
		signupEmail(event.target.signup_email.value, event.target.signup_password.value)
		.then((result) => {
			const user = result.user;
			loginSuccess(user.email, user.uid);
		  })
		  .catch((error) => console.log(error));
	}

	const login = async event => {
		loginEmail(event.target.login_email.value, event.target.login_password.value)
		.then((result) => {
			console.log(result);
			const user = result.user;
			loginSuccess(user.email, user.uid);
		});
	}
	
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
						<form onSubmit={signUp} name="signup_form" role="form">
							<fieldset>							
								<p class="text-uppercase pull-center"> SIGN UP.</p>	
								<div class="form-group">
									<input type="text" name="username" id="username" class="form-control input-lg" placeholder="username"/>
								</div>

								<div class="form-group">
									<input type="email" name="signup_email" id="signup_email" class="form-control input-lg" placeholder="Email Address"/>
								</div>
								<div class="form-group">
									<input type="password" name="signup_password" id="signup_password" class="form-control input-lg" placeholder="Password"/>
								</div>
									<div class="form-group">
									<input type="password" name="password2" id="password2" class="form-control input-lg" placeholder="Password2"/>
								</div>
								<div class="form-check">
									<label class="form-check-label">
									<input type="checkbox" class="form-check-input"/>
									Check if you want to sign up as a tutor.
									</label>
								</div>
								<div>
									<button type="submit" class="btn btn-lg btn-primary" placeholder="Register"/>
								</div>
							</fieldset>
						</form>
					</div>
					
					<div class="col-md-2">
						
					</div>
					
					<div class="col-md-5">
						<form onSubmit={login} name="signup_form" role="form">
							<fieldset>							
								<p class="text-uppercase"> Login using your account: </p>	
									
								<div class="form-group">
									<input type="email" name="login_email" id="login_email" class="form-control input-lg" placeholder="username"/>
								</div>
								<div class="form-group">
									<input type="password" name="login_password" id="login_password" class="form-control input-lg" placeholder="Password"/>
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
