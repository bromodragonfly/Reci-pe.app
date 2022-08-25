import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/category/:name" element={<Category />} />
          <Route exact path="/recipe/:id" element={<Recipe />} />
          <Route element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
