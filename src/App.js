import NavBar from "./components/NavBar/NavBar";
import Header from "./components/HomePage/Header/Header";
import Collection from "./components/HomePage/Collection/Collection";
import Blogs from "./components/HomePage/Blogs/Blogs";
import Footer from "./components/HomePage/Footer/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Collection />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
