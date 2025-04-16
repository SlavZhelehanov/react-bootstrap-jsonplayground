import { Route, Routes } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/global/Header';
import HomePage from './components/HomePage';
import AlbumsAll from './components/album/AlbumsAll';
import AlbumPhotos from './components/album/AlbumPhotos';
import PostsAll from './components/post/PostsAll';

export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/albums' element={<AlbumsAll />} />
                <Route path='/albums/:id/photos' element={<AlbumPhotos />} />
                <Route path='/posts' element={<PostsAll />} />
            </Routes>
        </>
    )
}