
type CourseModuleProps = {
  title:string;
  videoUrl:string;
  documentUrl:string;
}
function CourseModule({title, videoUrl, documentUrl}:CourseModuleProps){
  return (
    <div className="course-section">
      <h2>{title}</h2>
      <ul className="course-materials-list">
          <li><a href={documentUrl} className="course-download-link">Скачать материалы лекции {title}</a></li>
      </ul>
      <div className="course-video-container">
          <iframe src={videoUrl} allowFullScreen></iframe>
      </div>
    </div>)
}

export default CourseModule;