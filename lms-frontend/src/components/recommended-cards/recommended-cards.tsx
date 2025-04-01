import { MouseEventHandler } from "react";
import { Recommendation } from "../../types/state";
import { useAppDispatch } from "../../hooks";
import { fetchCourseInfo } from "../../store/api-actions";
import { useNavigate } from "react-router-dom";

function RecommendedCards(recommended:Recommendation){
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRecommendedCourseClick = (event: React.MouseEvent<HTMLAnchorElement>)=>{
    event.preventDefault();
    dispatch(fetchCourseInfo(recommended.id));
    navigate(`/Course/${recommended.id}`);
  };
  return (
    <div className="course-recommended-course">
        <img src={recommended.imageUrl} alt={recommended.title}/>
        <h3>{recommended.title}</h3>
        <p>{recommended.description}</p>
        <a href="#" onClick={handleRecommendedCourseClick}>Подробнее</a>
    </div>
  )
}
export default RecommendedCards;