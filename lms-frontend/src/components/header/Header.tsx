import logo from "../../markup/image/logo.svg";
import profile from "../../markup/image/profile2.svg";
function Header(){
  return(
    <header className="header">
    <div className="logo">
      <img src = {logo} height="60px"/>
    </div>
    <nav className="nav">
      <a href="#" className="nav-link" aria-label="Открыть список обучающих курсов">Банк курсов</a>
      <a href="#" className="nav-link" aria-label="Открыть мои курсы">Мои курсы</a>
      <a href="#" className="nav-link" aria-label="Просмотреть прогресс">Прогресс</a>
    </nav>
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Поиск курсов..."/>
      <button className="search-button" aria-label="Поиск">Поиск</button>
    </div>

    <div className="profile">
      <button className="profile-button">
        <img src = {profile} height="30px"/>
      </button>
    </div>
  </header>
  );
}
export default Header;