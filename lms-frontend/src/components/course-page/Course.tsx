import Footer from "../footer/footer";
import Header from "../header/Header";
import MLPhoto from "../../markup/image/ML.png";
import NNPhoto from "../../markup/image/NN.png";
import WebPhoto from "../../markup/image/Web.svg";
import PythonPhoto from "../../markup/image/Python-logo.png";

type CourseProps={
  isAuth : boolean;
  isEnrolled:boolean;
};
function Course({isAuth, isEnrolled} : CourseProps){
  return(
    <>
      <Header/>
        {isAuth && isEnrolled ?

        <main className="main">
        <div className="course-container2">

      <div className="course-content">
          <h1>Основы Python</h1>

          <div className="course-section">
              <h2>Раздел 1: Введение в Python</h2>
              <ul className="course-materials-list">
                  <li><a href="python_intro.pdf" className="course-download-link">Скачать материалы лекции "Введение в Python"</a></li>
              </ul>
              <div className="course-video-container">
                  <iframe src="https://www.youtube.com/embed/_uQrJ0TkZlc" allowFullScreen></iframe>
              </div>
          </div>

          <div className="course-section">
              <h2>Раздел 2: Основные конструкции</h2>
              <ul className="course-materials-list">
                  <li><a href="python_basics.pdf" className="course-download-link">Скачать материалы лекции "Основы синтаксиса"</a></li>
              </ul>
              <div className="course-video-container">
                  <iframe src="https://www.youtube.com/embed/rfscVS0vtbw" allowFullScreen></iframe>
              </div>
          </div>

          <div className="course-section">
              <h2>Раздел 3: Работа со списками и словарями</h2>
              <ul className="course-materials-list">
                  <li><a href="lists_dicts.pdf" className="course-download-link">Скачать материалы лекции "Списки и словари"</a></li>
              </ul>
              <div className="course-video-container">
                  <iframe src="https://www.youtube.com/embed/N4mEzFDjqtA" allowFullScreen></iframe>
              </div>
          </div>

          <div className="course-section">
              <h2>Раздел 4: Объектно-ориентированное программирование</h2>
              <ul className="course-materials-list">
                  <li><a href="oop_python.pdf" className="course-download-link">Скачать материалы лекции "Объектно-ориентированное программирование"</a></li>
              </ul>
              <div className="course-video-container">
                  <iframe src="https://www.youtube.com/embed/MOaZrj96RjM" allowFullScreen></iframe>
              </div>
          </div>
      </div>


      <aside className="course-sidebar">
          <h2>Рекомендуемые курсы</h2>

          <div className="course-recommended-course">
              <img src={NNPhoto} alt="Машинное обучение"/>
              <h3>Машинное обучение</h3>
              <p>Изучите основы машинного обучения, работу с нейросетями и анализ данных.</p>
              <a href="#">Подробнее</a>
          </div>

          <div className="course-recommended-course">
              <img src={WebPhoto} alt="Веб-разработка"/>
              <h3>Веб-разработка</h3>
              <p>Научитесь создавать современные веб-приложения с HTML, CSS и JavaScript.</p>
              <a href="#">Подробнее</a>
          </div>

          <div className="course-recommended-course">
              <img src={MLPhoto} alt="Анализ данных"/>
              <h3>Анализ данных</h3>
              <p>Освойте основы анализа данных с помощью Python и Pandas.</p>
              <a href="#">Подробнее</a>
          </div>
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
              <button className="enroll-button" aria-label="Записаться на курс">Записаться</button>
            </div>
          </div>
        </main>}
      <Footer/>
    </>
  );
}
export default Course;