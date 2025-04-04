import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header, { HeaderProps } from "../../components/header/Header";
import { useAppDispatch } from "../../hooks";
import { loginAction } from "../../store/api-actions";
import { useRef } from "react";
import { redirectToRoute } from "../../store/redirect-action";
import { AppRoute } from "../../mocks/routes";

function LoginPage({profileButtonHandler, handleSearchFunction, handleProgressClick}:HeaderProps){
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);


    const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
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
            dispatch(loginAction(loginInfo));}
            dispatch(redirectToRoute(AppRoute.Profile));

    }
    return(
        <>
            <Header profileButtonHandler={profileButtonHandler} handleSearchFunction = {handleSearchFunction} handleProgressClick={handleProgressClick}/>
                <div className="auth-container" id="auth-container">
                <h1 id="form-title">Авторизация</h1>
                <form className="auth-form" id="auth-form">
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