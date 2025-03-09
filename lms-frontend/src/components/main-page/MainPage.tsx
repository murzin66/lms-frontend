import Header from "../header/Header";
import Footer from "../footer/footer";
import CourseCard from "../course-card/CourseCard";
import { Cource } from "../../mocks/couses";

type CourceCardProps = {
  Cources:Cource[];
}
function MainPage({Cources} : CourceCardProps){
  return(
    <>
      <Header/>
        <main className="main">
            <h1 className="main-title">Банк курсов</h1>
            <div className="course-cards">
              {Cources.map((course) => (
              <CourseCard key = {course.id} title={course.title} stars={course.stars} id = {course.stars} description={course.description} difficulty={course.difficulty}/>
              ))}
          </div>
        </main>
      <Footer/>
    </>
  );
}
export default MainPage;