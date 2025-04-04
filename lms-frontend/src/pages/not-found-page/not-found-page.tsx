import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header, { HeaderProps } from "../../components/header/Header";

function NotFoundPage({profileButtonHandler, handleSearchFunction, handleProgressClick}:HeaderProps){
  return(
    <>
    <Header profileButtonHandler = {profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction}/>
      <main className="main">
        <h1 className="main-title">Страница не найдена, <Link to ='/' className="nav-link"> перейти на главную страницу</Link></h1>

      </main>
    <Footer/>
    </>

  )
};
export default NotFoundPage;