import { Route, Routes } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/global/Header';
import HomePage from './components/HomePage';

export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </>
    )
}