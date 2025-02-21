import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../markup/image/logo.svg";
import profile from "../../markup/image/profile2.svg";
function Header(){
  const navigate = useNavigate();
  const profileButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/profile");
  }
  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/search");
  }
  return(
    <header className="header">
    <div className="logo">
      <img src = {logo} height="60px"/>
    </div>
    <nav className="nav">
      <Link to = "/" className="nav-link" aria-label="Открыть список обучающих курсов">Банк курсов</Link>
      <Link to ="/" className="nav-link" aria-label="Открыть мои курсы">Мои курсы</Link>
      <Link to = "/progress" className="nav-link" aria-label="Просмотреть прогресс">Прогресс</Link>
    </nav>
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Поиск курсов..."/>
      <button className="search-button" aria-label="Поиск" onClick={handleSearch}>Поиск</button>
    </div>

    <div className="profile">
      <button className="profile-button" onClick={profileButtonHandler}>
        <img src = {profile} height="30px"/>
      </button>
    </div>
  </header>
  );
}
export default Header;