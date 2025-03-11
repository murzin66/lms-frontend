import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { fetchCourseInfo } from "../../store/api-actions";

type CourseCardProps = {
  title: string;
  description: string;
  stars: number;
  difficulty: number;
  id: number;
};

function CourseCard({ title, description, stars, difficulty, id }: CourseCardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const navigateToCourse = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(fetchCourseInfo(1));
    navigate(`/Course/${id}`);
  };

  const StarRating = ({ stars }: { stars: number }) => {
    const maxStars = 5;
    const starArray = Array.from({ length: maxStars }, (_, index) => {
      return index < stars ? '★' : '☆';
    });

    return (
      <span className="course-difficulty">
        {starArray.map((star, index) => (
          <span key={index} className="star">
            {star}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="course-card">
      <h2 className="course-title" onClick={navigateToCourse}>{title}</h2>
      <p className="course-description">{description}</p>
      <div className="course-meta">
        <span className="course-hours">Трудоемкость: {difficulty} часов</span>
        <StarRating stars={stars} />
      </div>
    </div>
  );
}

export default CourseCard;