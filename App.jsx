import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LoadingScreen from './components/LoadingScreen';
import { AppProvider } from './context/AppContext';
import CookieConsent from './components/CookieConsent';
import DestinationsPage from './pages/Destinations';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AppProvider>
            <HashRouter>
                <ScrollToTop/>
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <LoadingScreen key="loading"/>
                    ) : (
                        <div className="bg-brand-dark text-brand-light min-h-screen flex flex-col font-sans">
                            <Header />
                            <main className="flex-grow">
                                <Routes>
                                    <Route path="/" element={<HomePage />}/>
                                    <Route path="/about" element={<AboutPage />}/>
                                    <Route path="/booking" element={<BookingPage />}/>
                                    <Route path="/contact" element={<ContactPage />}/>
                                    <Route path="/admin/dashboard" element={<AdminDashboardPage />}/>
                                    <Route path="/admin" element={<AdminLoginPage />}/>
                                    <Route path="/destinations" element={<DestinationsPage />}/>
                                </Routes>
                            </main>
                            <Footer />
                            <CookieConsent />
                        </div>
                    )}
                </AnimatePresence>
            </HashRouter>
        </AppProvider>
    );
};

export default App;
