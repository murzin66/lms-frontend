import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/Header";
import './spinner.css';

function LoadingPage(){
  return(
    <div className="spinner-overlay" data-testid="spinner-container">
      <div className="spinner" data-testid="spinner"></div>
    </div>
  )
};
export default LoadingPage;