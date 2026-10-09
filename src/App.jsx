import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';
import HeroBanner from './components/HeroBanner';
import ArticleSection from './components/ArticleSection';
import TutorialSection from './components/TutorialSection';
import SubscribeBar from './components/SubscribeBar';
import SiteFooter from './components/SiteFooter';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

import './App.css';

function Home() {
  return (
    <>
      <HeroBanner />
      <ArticleSection />
      <TutorialSection />
      <SubscribeBar />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;