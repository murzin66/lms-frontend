import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/Header";

function NotFoundPage(){
  return(
    <>
    <Header/>
      <main className="main">
        <h1 className="main-title">Страница не найдена, <Link to ='/' className="nav-link"> перейти на главную страницу</Link></h1>

      </main>
    <Footer/>
    </>

  )
};
export default NotFoundPage;