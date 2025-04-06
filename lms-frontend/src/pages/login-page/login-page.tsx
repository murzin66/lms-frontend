import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import { useRef } from "react";


export type LoginPageProps = {
    profileButtonHandler: ()=> void;
    handleSearchFunction: (search:string)=> void;
    handleProgressClick: ()=> void;
    handleLoginClick: (
        loginInfo : {
            email: string,
            password: string
        }
    ) => void,
    handleToggle: (route: string)=> void;
};
function LoginPage({profileButtonHandler, handleSearchFunction, handleProgressClick, handleLoginClick, handleToggle}:LoginPageProps){
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


    const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleToggle("/register");

        navigate("/register");
      }
    const handleLogin = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (email && password){
            const loginInfo = {
                "email": email,
                "password":password
            }
            handleLoginClick(loginInfo);
        }
    }
    return(
        <>
            <Header profileButtonHandler={profileButtonHandler} handleSearchFunction = {handleSearchFunction} handleProgressClick={handleProgressClick}/>
                <div className="auth-container" id="auth-container">
                <h1 id="form-title">Авторизация</h1>
                <form className="auth-form" id="auth-form" data-testid = "auth-form">
                    <label htmlFor="login">Логин</label>
                    <input type="text" id="login" name="login"  ref = {emailRef} required/>

                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" name="password" ref = {passwordRef} required/>

                    <button type="submit" className="auth-button" aria-label="Войти" onClick = {handleLogin}>Войти</button>
                    <button type="button" className="switch-form" onClick={toggleForm} aria-label="Зарегистрироваться">Зарегистрироваться</button>
                </form>
                </div>
            <Footer/>
        </>
    );
}
export default LoginPage;