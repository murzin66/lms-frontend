import Footer from "../footer/footer";
import Header from "../header/Header";
import MLPhoto from "../../markup/image/ML.png";
import NNPhoto from "../../markup/image/NN.png";
import WebPhoto from "../../markup/image/Web.svg";
import PythonPhoto from "../../markup/image/Python-logo.png";
import  {CourseType}  from "../../types/state";
import CourseModule from "../course-modules/course-modules";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRecommendations, getUserEmail } from "../../store/selectors";
import RecommendedCards from "../recommendedCards/recommendedCards";
import React from "react";
import { redirectToRoute } from "../../store/redirect-action";
import { AppRoute } from "../../mocks/routes";
import { enrollAction } from "../../store/api-actions";

type CourseProps={
  isAuth : boolean;
  isEnrolled:boolean;
  courseInfo:CourseType;
};
function Course({isAuth, isEnrolled, courseInfo} : CourseProps){
  const recomendations = useAppSelector(getRecommendations);
  const email = useAppSelector(getUserEmail);
  const dispatch = useAppDispatch();
  const handleCourseEnroll = (event: React.MouseEvent) =>{
    event.preventDefault();
    if (!isAuth){
      dispatch(redirectToRoute(AppRoute.Login));
    }
    else{
      const enrollInfo = {
        courseId: courseInfo.courseId,
        email: email,
      }
      console.log(courseInfo.courseId)
      dispatch(enrollAction(enrollInfo));
    }

  }
  return(
    <>
      <Header/>
        {(isAuth && isEnrolled) ?

        <main className="main">
        <div className="course-container2">

          <div className="course-content">
            <h1>{courseInfo.courseName}</h1>
              {

                courseInfo.descriptionList.map((elem, index) => (
                  <CourseModule
                    key={index}
                    title={elem}
                    videoUrl={courseInfo.videoList[index]}
                    documentUrl={courseInfo.documentList[index]}
                  />
                ))
              }
          </div>



      <aside className="course-sidebar">
          <h2>Рекомендуемые курсы</h2>
            {recomendations?.length > 0  ?
              recomendations.map((rec) => (
                <RecommendedCards {...rec} key = {rec.courseId} />
              ))
            : null
            }
      </aside>
  </div>
</main>

        :
        <main className="main">
          <div className="course-container1">
            <h1 className="course-title">Основы программирования на Python</h1>
            <img src={PythonPhoto} alt="Изображение курса" className="course-image"/>
            <p className="course-description">
              Этот курс предназначен для начинающих разработчиков, желающих освоить один из самых популярных языков программирования — Python.
              Вы изучите основы синтаксиса, структуры данных, работу с файлами и базами данных, а также основы объектно-ориентированного программирования.
              В ходе обучения будут рассмотрены реальные примеры использования Python в веб-разработке, анализе данных и автоматизации задач.
              После прохождения курса студенты смогут разрабатывать собственные проекты, работать с API и создавать автоматизированные решения.
            </p>
            <div className="competencies">
              <h3>Компетенции после курса:</h3>
              <ul>
                <li>Понимание синтаксиса и структур данных в Python</li>
                <li>Работа с файлами и базами данных</li>
                <li>Создание программ с использованием объектно-ориентированного подхода</li>
                <li>Основы работы с API и автоматизация процессов</li>
                <li>Разработка простых веб-приложений на Python</li>
              </ul>
            </div>
            <div className="button-container">
              <button className="enroll-button" aria-label="Записаться на курс" onClick={handleCourseEnroll}>Записаться</button>
            </div>
          </div>
        </main>}
      <Footer/>
    </>
  );
}
export default Course;