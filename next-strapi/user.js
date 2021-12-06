import React from 'react';
import ReactDOM from 'react-dom';
import {store, useGlobalState} from 'state-pool';
import dynamic from 'next/dynamic';

store.setState("user", {uid: "",
                        email: "",
                        password: ""});

export default function UserInfo(props){
    const DynamicComponentWithNoSSR = dynamic(
        //() => import('../components/hello3'),
        { ssr: false }
    )

    const user = {uid: "",
                email: "",
                password: ""};

    let updateName = (e) => {
        updateUser(function(user){
            user.name = e.target.value;
        });
    }

    return (
        
        <div>
            <DynamicComponentWithNoSSR/>
            Name: {user.name}
            <br/>
            <input type="text" value={user.name} onChange={updateName}/>
        </div>
    );
}

//ReactDOM.render(UserInfo, document.querySelector("#root"));