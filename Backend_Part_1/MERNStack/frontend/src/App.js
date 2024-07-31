import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./screens/LandingPage/LandingPage"
import MyNotes from './screens/MyNotes/MyNotes';

const App = () => {
    return <BrowserRouter>
        <Header />
        <main>
            <Routes>
                <Route path='/' Component={LandingPage} exect />
                <Route path='/mynotes' Component={() => <MyNotes />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
}

export default App;
