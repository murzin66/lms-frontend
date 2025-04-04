import { Recommendation } from "../../types/state";


export type RecommendedCardProps = {
  recommended: Recommendation;
  handleRecommendedCourseClickFun: (courseNum: number) => void;
}
function RecommendedCards({recommended, handleRecommendedCourseClickFun}:RecommendedCardProps){

  const handleRecommendedCourseClick = (event: React.MouseEvent<HTMLAnchorElement>)=>{
    event.preventDefault();
    handleRecommendedCourseClickFun(recommended.id);
  };
  return (
    <div className="course-recommended-course" data-testid = "recommended-card">
        <img src={recommended.imageUrl} alt={recommended.title}/>
        <h3>{recommended.title}</h3>
        <p>{recommended.description}</p>
        <a href="#" onClick={handleRecommendedCourseClick}>Подробнее</a>
    </div>
  )
}
export default RecommendedCards;