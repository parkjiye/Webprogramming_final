import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from 'next/router';

import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { loginEmail, signupEmail } from './firebase';
import { user } from '../user';

export default function Page({list, auth}) {
	//signup function
	const signUp = async event => {
		event.preventDefault();
		console.log(event.target.signup_email.value);
		//if password value and confrim password value are different, show alert message
		if(event.target.signup_password.value != event.target.signup_password_confirm.value) {
			alert("Password and Confirm password are different.");
			//clean up the input values
			event.target.username.value = "";
			event.target.signup_email.value = "";
			event.target.signup_email.value = "";
			event.target.signup_email_confirm.value = "";
		}
		//if the signup is successful, 
		signupEmail(event.target.signup_email.value, event.target.signup_password.value)
		.then((result) => {
			//change the screen to course page
			Router.push('/course');
			//set the user of localstorage to the signup_email value
			if (typeof window !== "undefined") {
				localStorage.setItem("user", event.target.signup_email.value);
			}
			user = result.user;
			//clean up the input values
			event.target.username.value = "";
			event.target.signup_email.value = "";
			event.target.signup_email.value = "";
			event.target.signup_email_confirm.value = "";
		})
		//if the signup is not successful,
		.catch((error) => console.log(error));
	}

	const login = async event => {
		event.preventDefault();
		//if the login is successful,
		loginEmail(event.target.login_email.value, event.target.login_password.value)
		.then((result) => {
			//change the screen to course page
			Router.push('/course');
			//set the user of localstorage to the login_email value
			if (typeof window !== "undefined") {
				localStorage.setItem("user", event.target.login_email.value);
			}
			user = result.user;
			//clean up the input values
			event.target.login_email.value = "";
			event.target.login_password.value = "";
			
		})
		//if the login is not successful,
		.catch((error) => {
			//show the alert message
			alert("Wrong! Put correct email and password.");
			//clean up the input values
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

		<img className={styles.banner} src="/webprogramming_banner.png"/>
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
								<br></br>
								<div class="form-group">
									<input type="email" name="signup_email" id="signup_email" class="form-control input-lg" placeholder="Email Address"/>
								</div>
								<br></br>
								<div class="form-group">
									<input type="password" name="signup_password" id="signup_password" class="form-control input-lg" placeholder="Password"/>
								</div>
								<br></br>
								<div class="form-group">
									<input type="password" name="signup_password_confirm" id="signup_password_confirm" class="form-control input-lg" placeholder="Confirm Password"/>
								</div>
								<br></br>
								<div>
									<button type="submit" class="btn btn-md btn-primary">Register</button>
								</div>
							</fieldset>
						</form>
					</div>
					
					<div class="col-md-2"></div>
					
					<div class="col-md-5">
						<form onSubmit={login} name="login_form">
							<fieldset>							
								<p class="text-uppercase"> Login </p>
								<br></br>	
								<div class="form-group">
									<input type="email" name="login_email" id="login_email" class="form-control input-lg" placeholder="Email"/>
								</div>
								<br></br>
								<div class="form-group">
									<input type="password" name="login_password" id="login_password" class="form-control input-lg" placeholder="Password"/>
								</div>
								<br></br>
								<div>
									<button type="submit" class="btn btn-md btn-primary">Login</button>
								</div>									
							</fieldset>
						</form>	
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
		</div>
	)
}
