import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/layout";
import {HomePage} from "./components/pages/home";
import {AboutPage} from "./components/pages/about";
import {VisitorsPage} from "./components/pages/visitors";
import {AfishaPage} from "./components/pages/afisha";
import {CollectionPage} from "./components/pages/collection";
import {ContactPage} from "./components/pages/contact";
function App() {
  return (
  <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/visitors" element={<VisitorsPage/>}/>
          <Route path="/afisha" element={<AfishaPage/>}/>
          <Route path="/collection" element={<CollectionPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
      </Route>
  </Routes>
  );
}

export default App;
