import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/Header";

function LoginPage(){
    const navigate = useNavigate();
    const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/register");
      }
    return(
        <>
            <Header/>
                <div className="auth-container" id="auth-container">
                <h1 id="form-title">Авторизация</h1>
                <form className="auth-form" id="auth-form">
                    <label htmlFor="login">Логин</label>
                    <input type="text" id="login" name="login" required/>

                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" name="password" required/>

                    <button type="submit" className="auth-button" aria-label="Войти">Войти</button>
                    <button type="button" className="switch-form" onClick={toggleForm} aria-label="Зарегистрироваться">Зарегистрироваться</button>
                </form>
                </div>
            <Footer/>
        </>
    );
}
export default LoginPage;