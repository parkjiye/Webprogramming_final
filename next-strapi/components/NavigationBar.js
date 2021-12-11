import styles from '../styles/Home.module.css'


export const NavigationBar=(props)=>{
    const check=()=>{
        
    }
    const getusername=()=>{
        let username="";
        let mode="Login / Signup";
        if (typeof window !== "undefined") {
          username=localStorage.getItem("user");
        }
        console.log(username);
        if(username==undefined){
            mode="Login / Signup";
        }
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
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="/course">All</a></li>
                            <li><a class="dropdown-item" href="#">Python</a></li>
                            <li><a class="dropdown-item" href="#">Java</a></li>
                            <li><a class="dropdown-item" href="#">Web Programming</a></li>
                        </ul>
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