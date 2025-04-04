import {  CourseType } from "../../types/state";

export type SearchResultCardProps = {
  shortInfo: CourseType;
  handleSearchResultClickFun: (courseNum:number)=> void;
}
function SearchResultCard({shortInfo, handleSearchResultClickFun}:SearchResultCardProps){


  const handleSearchResultClick = (event:React.MouseEvent<HTMLElement>)=>{
    event.preventDefault();
    handleSearchResultClickFun(shortInfo.courseId);
  }
  return(
      <div className="course-card2" data-testid = "course-card-test">
      <h2 className="course-title" onClick={handleSearchResultClick} data-testid = "course-title">{shortInfo.courseName}</h2>
      <p className="course-description">{shortInfo.shortInfo.description}</p>
      <div className="course-meta" data-testid = "course-meta">
        <span className="course-hours">Трудоемкость: {shortInfo.shortInfo.difficulty} часов</span>
      </div>
      </div>
  )
}
export default SearchResultCard;