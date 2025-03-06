import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/Header";

function Register () {
    const navigate = useNavigate();
    const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/login");
      }
    return (
        <>
        <Header/>
        <div className="auth-container" id="auth-container">
        <h1 id="form-title">Регистрация</h1>
        <form className="auth-form" id="auth-form">
        <label htmlFor="surname">Фамилия</label>
          <input type="text" id="surname" name="surname" required/>

          <label htmlFor="name">Имя</label>
          <input type="text" id="name" name="name" required/>

          <label htmlFor="middlename">Отчество</label>
          <input type="text" id="middlename" name="middlename" required/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required/>

          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" name="password" required/>

          <label htmlFor="interests">Интересы</label>
          <textarea id="interests" name="interests" rows={3}></textarea>

          <button type="submit" className="auth-button">Зарегистрироваться</button>
          <button type="button" className="switch-form" onClick={toggleForm} aria-label="Уже есть аккаунт? перейти на страницу входа">Уже есть аккаунт? Войти</button>
           </form>
        </div>
        <Footer/>
        </>
    )
}
export default Register;