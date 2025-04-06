import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import  {CourseType}  from "../../types/state";
import CourseModule from "../../components/course-modules/course-modules";
import { useAppSelector } from "../../hooks";
import { getCourseList,  getUserEmail, getUserTag } from "../../store/selectors";
import RecommendedCards from "../../components/recommended-cards/recommended-cards";
import React from "react";


type CourseProps={
  isAuth : boolean;
  isEnrolled:boolean;
  courseInfo:CourseType;
  profileButtonHandler: () =>void;
  handleSearchFunction: (search:string) => void;
  handleProgressClick: ()=> void;
  handleRecommendedCourseClickFun: (courseNum: number) => void;
  handleCourseEnrollFun: (
    isAuth: boolean,
    enrollInfo: {
      courseId: number;
      email: string;
      courseTag: string;
    }
  ) => void
};
function Course({isAuth, isEnrolled, courseInfo, profileButtonHandler, handleProgressClick, handleSearchFunction, handleRecommendedCourseClickFun, handleCourseEnrollFun} : CourseProps){

  const userTags = useAppSelector(getUserTag);

  const mostFrequentTag = userTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topTag = Object.entries(mostFrequentTag)
    .sort((a, b) => b[1] - a[1])[0]?.[0];

  const recomendations = useAppSelector(getCourseList).filter(course=>course.courseTag === topTag).slice(0,3);

  const email = useAppSelector(getUserEmail);
  const handleCourseEnroll = (event: React.MouseEvent) =>{
    event.preventDefault();
    const enrollInfo = {
      courseId: courseInfo.courseId,
      email: email,
      courseTag: courseInfo.courseTag
    }
    handleCourseEnrollFun(isAuth, enrollInfo);

  }
  return(
    <>
      <Header profileButtonHandler={profileButtonHandler} handleProgressClick = {handleProgressClick} handleSearchFunction={handleSearchFunction}/>
        {(isAuth && isEnrolled) ?

        <main className="main">
        <div className="course-container2" data-testid = "enrolled-course-container">

          <div className="course-content" data-testid = "enrolled-course-content" >
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



      <aside className="course-sidebar" data-testid = "recomendation-bar">
          <h2>Рекомендуемые курсы</h2>
            {recomendations?.length > 0  ?
              recomendations.map((rec) => (
                <RecommendedCards recommended={rec} handleRecommendedCourseClickFun = {handleRecommendedCourseClickFun} key = {rec.id} />
              ))
            : null
            }
      </aside>
  </div>
</main>

        :
        <main className="main">
  <div className="course-container1">
    <div className="course-content">
    <div className = "competenceHeader">
      {courseInfo.courseName}
    </div>
      <img src={courseInfo.shortInfo.imageUrl} alt="Изображение курса" className="course-image"/>
      <p className="course-description">
        {courseInfo.longDescription}
      </p>
      <div className="competencies" data-testid = "competencies">
        <div className = "competenceHeader">
          Компетенции после курса
        </div>

        <ul>
          {courseInfo.competences.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

      </div>
      <div className="button-container">
        <button className="enroll-button" aria-label="Записаться на курс" onClick={handleCourseEnroll}>
          Записаться
        </button>
      </div>
    </div>
  </div>
</main>
}
      <Footer/>
    </>
  );
}
export default Course;