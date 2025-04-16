import { Route, Routes } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './components/HomePage';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </>
    )
}