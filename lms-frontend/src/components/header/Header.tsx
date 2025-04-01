import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../markup/image/logo.svg";
import profile from "../../markup/image/profile2.svg";
import { useAppDispatch } from "../../hooks";
import { getSearchResult, getUserProgress } from "../../store/api-actions";
import { useRef } from "react";
import { changeQueryAction } from "../../store/search-process/search-process";
function Header(){
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLInputElement>(null);;
  const profileButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/profile");
  }
  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/search");
    const search = searchRef.current;
    if (search){
      dispatch(getSearchResult(search?.value));
      dispatch(changeQueryAction(search?.value ));}
  }
  function handleProgressClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    dispatch(getUserProgress(1));
  }

  return(
    <header className="header">
    <div className="logo">
      <Link to ="/"><img src = {logo} alt = "логотип" height="60px"/></Link>
    </div>

    <ul className = "ul_nav">
    <nav className="nav">
      <li><Link to = "/" className="nav-link" aria-label="Открыть список обучающих курсов">Банк курсов</Link></li>
      <li><Link to ="/mycourses" className="nav-link" aria-label="Открыть мои курсы">Мои курсы</Link></li>
      <li><Link to = "/progress" className="nav-link" aria-label="Просмотреть прогресс" onClick={handleProgressClick}>Прогресс</Link></li>
    </nav>
    </ul>
    <div className="search-container">
      <input type="text" className="search-input" ref = {searchRef} placeholder="Поиск курсов..."/>
      <button className="search-button" aria-label="Поиск" onClick={handleSearch}>Поиск</button>
    </div>

    <div className="profile">
      <button className="profile-button" onClick={profileButtonHandler}>
        <img src = {profile} alt ="перейти в фото профиля" height="30px"/>
      </button>
    </div>
  </header>
  );
}
export default Header;