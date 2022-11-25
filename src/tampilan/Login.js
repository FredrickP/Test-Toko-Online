import { useEffect, useState } from "react";
import { FiUser, FiLock, FiShow, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {

    const [valid, setValidity] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    const setLogin = () => {
        localStorage.setItem('user_name', username);
        localStorage.setItem('is_login', true);
        window.location = '/';
    }

    const loginValidity = () => {
        let regex = /^[a-zA-Z0-9]{3,10}$/;
        setValidity(username.length > 3 && regex.test(password));
    }

    
    return (
        <div className="absolute-full-screen center full-width">
            <div class="container" id="login-screen">
                <div class="vertical-spacing"></div>
                <div class="center">Login into your account</div>
                <div class="vertical-spacing"></div>
                <div class="app-login-form">
                    <div class="input-wrapper aliceblue outline full-width">
                        <FiUser fontSize={26} style={{marginRight: 10}}/>
                        <input class="input full-width" type="name" id="phone-number" placeholder="Username" maxLength={30} onChange={(evt) => {
                            const text = evt.currentTarget.value;
                            setUsername(text);
                            loginValidity();
                        }}/>
                        <div class="horizontal-spacing"></div>
                        <div class="horizontal-spacing"></div>
                    </div>
                    <div class="vertical-spacing"></div>
                    <div class="input-wrapper aliceblue outline full-width">
                        <FiLock fontSize={26} style={{marginRight: 10}}/>
                        <input class="input full-width" type={showPass ? "password" : "text"} id="phone-number" placeholder="Password" maxLength={10} onChange={(evt) => {
                            const text = evt.currentTarget.value;
                            setPassword(text);
                            loginValidity();
                        }}/>
                        {showPass ? <FiEye fontSize={26} style={{marginLeft: 10}} onClick={()=> {
                            setShowPass(false);
                        }}/> : <FiEyeOff fontSize={26} style={{marginLeft: 10}} onClick={()=> {
                            setShowPass(true);
                        }}/>}
                    </div>
                    <div class="vertical-spacing"></div>
                    <div class={`button ${valid ? 'primary' : 'disable'} full-width`} onClick={(evt) => {
                        if (valid) {
                            setLogin();
                        }
                    }}>
                        <span id="text-login" >Login</span>
                    </div>
                </div>
                <div class="vertical-spacing"></div>
            </div>
        </div>
    );
}

export default Login;