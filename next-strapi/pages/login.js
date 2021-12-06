import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { url } from '../config/next.config'
import Link from "next/link";
import Router from 'next/router';
import { useEffect } from 'react';

import { NavigationBar } from '../components/NavigationBar';
import { MainBanner } from '../components/MainBanner';
import { CourseCard } from '../components/CourseCard';
import { Footer } from '../components/Footer';
import { loginEmail, signupEmail } from './firebase';
import { user } from '../user';
//import { Router } from 'react-router';


export default function Page({list, auth}) {
	const signUp = async event => {
		event.preventDefault();
		console.log(event.target.signup_email.value);
		if(event.target.signup_password.value != event.target.signup_password_confirm.value) {
			alert("Password and Confirm password are different.");
			event.target.username.value = "";
			event.target.signup_email.value = "";
			event.target.signup_email.value = "";
			event.target.signup_email_confirm.value = "";
		}
		signupEmail(event.target.signup_email.value, event.target.signup_email.value)
		.then((result) => {
			user = result.user;
			alert("Success Registration!");
			event.target.username.value = "";
			event.target.signup_email.value = "";
			event.target.signup_email.value = "";
			event.target.signup_email_confirm.value = "";
		})
		.catch((error) => console.log(error));
	}

	const login = async event => {
		event.preventDefault();
		console.log(event.target.login_email.value);
		loginEmail(event.target.login_email.value, event.target.login_password.value)
		.then((result) => {
			console.log(result.user);
			user = result.user;
			console.log(user);
			alert("Success Login!");
			event.target.login_email.value = "";
			event.target.login_password.value = "";
			Router.push('/course');
		})
		.catch((result) => {
			console.log("wrong!!!");
			alert("Wrong! Put correct email and password.");
			
			Router.push('/course');
			if (typeof window !== "undefined") {
				localStorage.setItem("user", event.target.login_email.value);
			}
			event.target.login_email.value = "";
			event.target.login_password.value = "";
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
						<form onSubmit={signUp} name="signup_form">
							<fieldset>							
								<p class="text-uppercase pull-center">SIGN UP</p>	
								<div class="form-group">
									<input type="text" name="username" id="username" class="form-control input-lg" placeholder="Username"/>
								</div>

								<div class="form-group">
									<input type="email" name="signup_email" id="signup_email" class="form-control input-lg" placeholder="Email Address"/>
								</div>
								<div class="form-group">
									<input type="password" name="signup_password" id="signup_password" class="form-control input-lg" placeholder="Password"/>
								</div>
									<div class="form-group">
									<input type="password" name="signup_password_confirm" id="signup_password_confirm" class="form-control input-lg" placeholder="Confirm Password"/>
								</div>
								<div>
									<button type="submit" class="btn btn-md btn-primary">Register</button>
								</div>
							</fieldset>
						</form>
					</div>
					
					<div class="col-md-2">
						
					</div>
					
					<div class="col-md-5">
						<form onSubmit={login} name="login_form">
							<fieldset>							
								<p class="text-uppercase"> Login </p>	
								<div class="form-group">
									<input type="email" name="login_email" id="login_email" class="form-control input-lg" placeholder="Email"/>
								</div>
								<div class="form-group">
									<input type="password" name="login_password" id="login_password" class="form-control input-lg" placeholder="Password"/>
								</div>
								<div>
									<button type="submit" class="btn btn-md btn-primary">Login</button>
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
