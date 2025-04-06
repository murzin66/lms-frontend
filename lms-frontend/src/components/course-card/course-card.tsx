import { useState } from "react";

type CourseCardProps = {
  title: string;
  description: string;
  stars: number;
  difficulty: number;
  id: number;
  navigateToCourseFun: (courseNum:number) => void;
};

function CourseCard({ title, description, stars, difficulty, id, navigateToCourseFun }: CourseCardProps) {

  const [courseId, setCourseId] = useState<number>(0);

  const navigateToCourse = (event: React.MouseEvent<HTMLElement>) => {
    navigateToCourseFun(courseId);

  };
  const handleMouseHover = (event:React.MouseEvent<HTMLElement>) =>{
    event.preventDefault();
    setCourseId(id);
  };
  const handleMouseLeave = (event:React.MouseEvent<HTMLElement>)=>{
    event.preventDefault();
    setCourseId(0);
  }
  const StarRating = ({ stars }: { stars: number }) => {
    const maxStars = 5;
    const starArray = Array.from({ length: maxStars }, (_, index) => {
      return index < stars ? '★' : '☆';
    });

    return (
      <span className="course-difficulty" data-testid = "stars">
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
      <h2 className="course-title" onClick={navigateToCourse} onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave} data-testid = "course-title">{title}</h2>
      <p className="course-description">{description}</p>
      <div className="course-meta" data-testid = "hours">
        <span className="course-hours">Трудоемкость: {difficulty} часов</span>
        <StarRating stars={stars} />
      </div>
    </div>
  );
}

export default CourseCard;