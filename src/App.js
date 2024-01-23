import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TopButton from "./components/TopButton";

import Search from "./components/Search";
import Inquity from "./components/Inquity";
import NewsPage from "./components/news/NewsPage";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import CeoMessage from "./components/about/CeoMessage";
import CompanyInfo from "./components/about/CompanyInfo";
import Directions from "./components/about/Directions";
import ScrollToTop from "./components/ScrollToTop";

//메인 컴포넌트
export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Nav />
        <TopButton />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about/ceo" element={<CeoMessage />}>
            <Route path="about/ceo" element={<CeoMessage />} />
            <Route path="about/info" element={<CompanyInfo />} />
            <Route path="about/directions" element={<Directions />} />
          </Route>

          <Route path="search" element={<Search />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="inquity" element={<Inquity />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}
