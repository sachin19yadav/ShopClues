import './App.css';
import Header from "./components/Header"
import ContentBody from "./components/content/ContentBody"
import Footer from "./Footer/Footer"
function App() {
  return (
    <div className="App">
       <Header/>
       <div className="contentdiv"> 
      <ContentBody/>
      </div>
      <Footer/>
      </div>
    
  );
}

export default App;
