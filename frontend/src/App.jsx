import React, { useState } from 'react';
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
export default function App() {
    const [searchQuery, setSearchQuery] = useState('');
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
            </div>
            <Footer />
        </BrowserRouter>
    );
}
