import Header from "../header/Header";
import Footer from "../footer/footer";
function MainPage(){
  return(
    <>
      <Header/>
        <main className="main">
            <h1 className="main-title">Банк курсов</h1>
            <div className="course-cards">

              <div className="course-card">
                <h2 className="course-title">Основы Python</h2>
                <p className="course-description">Изучите основы программирования на Python.</p>
                <div className="course-meta">
                  <span className="course-hours">Трудоемкость: 20 часов</span>
                  <span className="course-difficulty">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </span>
                </div>
              </div>

              <div className="course-card">
                <h2 className="course-title">Машинное обучение</h2>
                <p className="course-description">Погрузитесь в мир машинного обучения и нейронных сетей.</p>
                <div className="course-meta">
                  <span className="course-hours">Трудоемкость: 40 часов</span>
                  <span className="course-difficulty">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </span>
                </div>
              </div>

              <div className="course-card">
                <h2 className="course-title">Веб-разработка</h2>
                <p className="course-description">Создавайте современные веб-приложения с использованием React и Django.</p>
                <div className="course-meta">
                  <span className="course-hours">Трудоемкость: 30 часов</span>
                  <span className="course-difficulty">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                  </span>
                </div>
              </div>

            <div className="course-card">
              <h2 className="course-title">Базы данных</h2>
              <p className="course-description">Изучите основы работы с реляционными и NoSQL базами данных.</p>
              <div className="course-meta">
                <span className="course-hours">Трудоемкость: 25 часов</span>
                <span className="course-difficulty">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
                </span>
              </div>
            </div>

            <div className="course-card">
              <h2 className="course-title">DevOps</h2>
              <p className="course-description">Освойте инструменты для автоматизации разработки и развертывания.</p>
              <div className="course-meta">
                <span className="course-hours">Трудоемкость: 35 часов</span>
                <span className="course-difficulty">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </span>
              </div>
            </div>


            <div className="course-card">
              <h2 className="course-title">Алгоритмы и структуры данных</h2>
              <p className="course-description">Изучите основные алгоритмы и структуры данных для эффективного программирования.</p>
              <div className="course-meta">
                <span className="course-hours">Трудоемкость: 50 часов</span>
                <span className="course-difficulty">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </span>
              </div>
            </div>
          </div>
        </main>
      <Footer/>
    </>
  );
}
export default MainPage;