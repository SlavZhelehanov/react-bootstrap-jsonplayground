import { Route, Routes } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/global/Header';
import HomePage from './components/HomePage';
import AlbumsAll from './components/album/AlbumsAll';
import AlbumPhotos from './components/album/AlbumPhotos';
import PhotosAll from './components/photos/PhotosAll';
import PostsAll from './components/post/PostsAll';
import PostComments from './components/post/PostComments';
import UsersAll from './components/user/UsersAll';
import UserProfile from './components/user/UserProfile';
import UsersAlbums from './components/user/UsersAlbums';
import UsersPosts from './components/user/UsersPosts';
import UsersTodos from './components/user/UsersTodos';
import PageNotFound from './components/global/PageNotFound';

export default function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/albums' element={<AlbumsAll />} />
                <Route path='/albums/:id/photos' element={<AlbumPhotos />} />
                <Route path='/photos' element={<PhotosAll />} />
                <Route path='/posts' element={<PostsAll />} />
                <Route path='/posts/:id/comments' element={<PostComments />} />
                <Route path='/users' element={<UsersAll />} />
                <Route path='/users/:param/:value' element={<UserProfile />} />
                <Route path='/users/:id/albums' element={<UsersAlbums />} />
                <Route path='/users/:id/posts' element={<UsersPosts />} />
                <Route path='/users/:id/todos' element={<UsersTodos />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}