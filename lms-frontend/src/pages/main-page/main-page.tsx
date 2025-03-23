import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import CourseCard from "../../components/course-card/course-card";
import { CourseShortInfo } from "../../types/state";

type CourceCardProps = {
  Cources:CourseShortInfo[];
}
function MainPage({Cources} : CourceCardProps){
  return(
    <>
      <Header/>
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