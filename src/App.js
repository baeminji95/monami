import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Nav from "./components/Nav"
import TopButton from "./components/TopButton"

import Search from "./components/Search"
import Inquity from "./components/Inquity"
import About from "./components/about/About"
import NewsPage from "./components/NewsPage"
import Main from "./components/main/Main"
import Footer from './components/Footer';

//메인 컴포넌트
export default function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <TopButton/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<Search />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="inquity" element={<Inquity />} />
      </Routes>
      <Footer/>
    </Router>
  )
}