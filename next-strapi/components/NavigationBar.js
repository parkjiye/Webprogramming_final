import styles from '../styles/Home.module.css'


export const NavigationBar=()=>{
    //if the state is login, show "user name" on the navigation bar
    const getusername=()=>{
        let username="";
        let mode="Login / Signup";
        if (typeof window !== "undefined") {
          username=localStorage.getItem("user");
        }
        
        //if user is not login, show the mode to the login/signup
        if(username==undefined){
            mode="Login / Signup";
        }
        //if user is login, show the mode to the logout
        else{
            mode="Logout";
        }
        return(
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="/">SKKULEARN</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/login">{mode}</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/course" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Courses
                        </a>
                    </li>
                    </ul>
                </div>
                <div className={styles.navigationbar}>
                    <h1>{username}</h1>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/mypage">My Courses</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
          
        )
    }
    
    return(
        getusername()
    );
};