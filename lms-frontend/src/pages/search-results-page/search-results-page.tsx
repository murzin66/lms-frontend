import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import { useAppSelector } from "../../hooks";
import { getQuery, getSearchResults } from "../../store/selectors";
import SearchResultCard from "../../components/search-result-card/search-result-card";
function SearchResults(){
  const results = useAppSelector(getSearchResults);
  const query = useAppSelector(getQuery);
  console.log(query);
  return(
    <>
    <Header/>
    <main className="results-container">
    <h1 className="results-header" style={{textAlign : "center"}}>Результаты поиска для "{query}"</h1>
      {results?.length ?
          <div className="course-cards2">


      {(results.map((result) => (
          <SearchResultCard {...result} key={result.id} />
        ))


      )} </div>
      : (
        <p className="no-results" style = {{textAlign : "center"}}>Ничего не найдено</p>
      )}

    </main>
    <Footer/>
    </>
  );
}
export default SearchResults;