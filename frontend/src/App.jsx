import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import AuthForm from './pages/AuthForm';
import { SubjectProvider } from './context/subjectContext';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <SubjectProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<AuthForm />} />
                        <Route path="/subject" element={<SubjectPage />} />
                    </Routes>
                </SubjectProvider>
            </div>
            <Footer />
        </BrowserRouter>
    );
}
