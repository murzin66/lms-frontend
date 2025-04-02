import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { CourseShortInfo, CourseType } from "../../types/state";
import { HtmlHTMLAttributes } from "react";
import { fetchCourseInfo } from "../../store/api-actions";

function SearchResultCard(shortInfo:CourseType){

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSearchResultClick = (event:React.MouseEvent<HTMLElement>)=>{
    event.preventDefault();
    console.log(shortInfo.courseId);
    dispatch(fetchCourseInfo(shortInfo.courseId));
    navigate(`/Course/${shortInfo.courseId}`);
  }
  return(
      <div className="course-card2">
      <h2 className="course-title" onClick={handleSearchResultClick}>{shortInfo.courseName}</h2>
      <p className="course-description">{shortInfo.shortInfo.description}</p>
      <div className="course-meta">
        <span className="course-hours">Трудоемкость: {shortInfo.shortInfo.difficulty} часов</span>
      </div>
      </div>
  )
}
export default SearchResultCard;