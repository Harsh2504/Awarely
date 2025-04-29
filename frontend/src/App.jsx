import React, { useState ,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import AuthForm from './pages/AuthForm';
import ConceptIntro from './pages/ConceptIntro';
import QuizPage from './pages/QuizPage';
import QuizResultPage from './pages/QuizResultPage';
import { SubjectProvider } from './context/subjectContext';
import '../input.css'
import { FaArrowUp } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
export default function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const scrollThreshold = window.innerHeight / 2; // 20% of viewport height
          setShowScrollToTop(scrollPosition > scrollThreshold);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
        <BrowserRouter>
            <Navbar setSearchQuery={setSearchQuery} />
            <div className="container">
                <SubjectProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<AuthForm />} />
                        <Route path="/subject" element={<SubjectPage searchQuery={searchQuery} />} />
                        <Route path="/concept" element={<ConceptIntro />} />
                        <Route path="/quiz" element={<QuizPage />} />
                        <Route path="/quiz-result" element={<QuizResultPage />} />
                    </Routes>
                </SubjectProvider>
            <Toaster position="top-center" />

            </div>
            {showScrollToTop && (
        <div
          onClick={scrollToTop}
          className="scroll-to-top"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#e0f2ff', // Light bluish tone
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'all 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4e78da';
            e.currentTarget.querySelector('svg').style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e0f2ff';
            e.currentTarget.querySelector('svg').style.color = '#4e78da';
          }}
        >
          <FaArrowUp
            style={{
              color: '#4e78da',
              fontSize: '1.25rem',
              transition: 'all 0.3s ease-in-out',
            }}
          />
        </div>
      )}
            <Footer />
        </BrowserRouter>
    );
}
