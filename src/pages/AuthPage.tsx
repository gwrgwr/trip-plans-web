import {useState} from "react";
import LoginFormComponent from "../components/LoginFormComponent.tsx";
import RegisterFormComponent from "../components/RegisterFormComponent.tsx";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    function changeAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    return (
        <div className="flex flex-col justify-center items-center col-start-1 col-end-4">
            {isLogin ? <LoginFormComponent onClick={changeAuthModeHandler}/> : <RegisterFormComponent onClick={changeAuthModeHandler}/>}
        </div>
    )
}

export default AuthPage;