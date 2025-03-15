import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { CourseShortInfo } from "../../types/state";
import { HtmlHTMLAttributes } from "react";
import { fetchCourseInfo } from "../../store/api-actions";

function SearchResultCard(shortInfo:CourseShortInfo){

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSearchResultClick = (event:React.MouseEvent<HTMLElement>)=>{
    event.preventDefault();
    console.log(shortInfo.id);
    dispatch(fetchCourseInfo(shortInfo.id));
    navigate(`/Course/${shortInfo.id}`);
  }
  return(
      <div className="course-card2">
      <h2 className="course-title" onClick={handleSearchResultClick}>{shortInfo.title}</h2>
      <p className="course-description">{shortInfo.description}</p>
      <div className="course-meta">
        <span className="course-hours">Трудоемкость: {shortInfo.difficulty} часов</span>
        <span className="course-hours">Модуль: {shortInfo.modules[0]} </span>

      </div>
      </div>
  )
}
export default SearchResultCard;