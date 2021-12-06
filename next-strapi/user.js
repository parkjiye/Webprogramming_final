import React from 'react';
import {store, useGlobalState} from 'state-pool';

store.setState("user", {uid: "",
                        email: "",
                        password: ""});

export default function UserInfo(props){
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
            Name: {user.name}
            <br/>
            <input type="text" value={user.name} onChange={updateName}/>
        </div>
    );
}

ReactDOM.render(UserInfo, document.querySelector("#root"));