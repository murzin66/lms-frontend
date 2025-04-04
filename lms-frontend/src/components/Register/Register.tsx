import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header, { HeaderProps } from "../header/Header";
import { useAppDispatch } from "../../hooks";
import { registerAction } from "../../store/api-actions";
import { useRef } from "react";

function Register ({profileButtonHandler, handleSearchFunction, handleProgressClick}:HeaderProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const midNameRef = useRef<HTMLInputElement>(null);
    const interestsRef = useRef<HTMLTextAreaElement>(null);


    const toggleForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("/login");
      }
    const handleRegister = (event:React.MouseEvent<HTMLButtonElement>)=> {
      event.preventDefault();
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      const name = nameRef.current?.value;
      const surname = surnameRef.current?.value;
      const middlename = midNameRef.current?.value;
      const interests = interestsRef.current?.value;

      if (email && password && name && surname && middlename && interests){
        const registerInfo = {
          'login' : email,
          'email' : email,
          'password' : password,
          'name' : name,
          'surname' : surname,
          'middlename' : middlename,
          'interests' : interests
        }
        dispatch(registerAction(registerInfo));
      }
    }
    return (
        <>
        <Header handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction} profileButtonHandler={profileButtonHandler}/>
        <div className="auth-container" id="auth-container">
        <h1 id="form-title">Регистрация</h1>
        <form className="auth-form" id="auth-form">
        <label htmlFor="surname">Фамилия</label>
          <input type="text" id="surname" name="surname" required aria-label="Фамилия" ref = {surnameRef}/>

          <label htmlFor="name">Имя</label>
          <input type="text" id="name" name="name" required aria-label="Имя" ref = {nameRef}/>

          <label htmlFor="middlename">Отчество</label>
          <input type="text" id="middlename" name="middlename" required aria-label="Отчество" ref = {midNameRef}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required aria-label="Email" ref = {emailRef}/>

          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" name="password" required aria-label="Пароль" ref = {passwordRef}/>

          <label htmlFor="interests">Интересы</label>
          <textarea id="interests" name="interests" rows={3} aria-label="Интересы" ref = {interestsRef}></textarea>

          <button type="submit" className="auth-button" onClick = {handleRegister}>Зарегистрироваться</button>
          <button type="button" className="switch-form" onClick={toggleForm} aria-label="Уже есть аккаунт? перейти на страницу входа">Уже есть аккаунт? Войти</button>
           </form>
        </div>
        <Footer/>
        </>
    )
}
export default Register;