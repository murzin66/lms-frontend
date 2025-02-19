import Header from "../header/Header";
import Footer from "../footer/footer";
function SearchResults(){
  return(
    <>
    <Header/>
    <main className="results-container">
    <h1 className="results-header" style={{textAlign : "center"}}>Результаты поиска для "Python"</h1>

    <div className="course-cards2">
      <div className="course-card2">
        <h2 className="course-title">Основы Python</h2>
        <p className="course-description">Изучите основы программирования на Python.</p>
        <div className="course-meta">
          <span className="course-hours">Трудоемкость: 20 часов</span>
        </div>
      </div>

      <div className="course-card2">
        <h2 className="course-title">Машинное обучение с Python</h2>
        <p className="course-description">Погрузитесь в мир машинного обучения с использованием Python и библиотек.</p>
        <div className="course-meta">
          <span className="course-hours">Трудоемкость: 40 часов</span>
        </div>
      </div>
    </div>
    </main>
    <Footer/>
    </>
  );
}
export default SearchResults;