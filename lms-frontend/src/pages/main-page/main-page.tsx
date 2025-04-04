import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import CourseCard from "../../components/course-card/course-card";
import { CourseShortInfo } from "../../types/state";
import { HeaderProps } from "../../components/header/Header";

type CourceCardProps = {
  Cources:CourseShortInfo[];
  profileButtonHandler: ()=> void;
  handleSearchFunction: (search:string) => void;
  handleProgressClick: ()=> void;
}
function MainPage({Cources, profileButtonHandler, handleSearchFunction, handleProgressClick} : CourceCardProps){
  return(
    <>
      <Header  profileButtonHandler= {profileButtonHandler } handleSearchFunction = {handleSearchFunction} handleProgressClick={handleProgressClick}/>
        <main className="main">
            <h1 className="main-title">Банк курсов</h1>
            <div className="course-cards">
              {Cources.map((course) => (
              <CourseCard key = {course.id} title={course.title} stars={course.rating} id = {course.id} description={course.description} difficulty={course.difficulty}/>
              ))}
          </div>
        </main>
      <Footer/>
    </>
  );
}
export default MainPage;