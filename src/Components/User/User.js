import React from 'react';
import { Route, Routes } from 'react-router';
import UserContext from '../../Context/UserContext';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';
import NotFound from '../Helper/NotFound';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  const userContext = React.useContext(UserContext);
  const { user } = userContext;

  return (
    <section className="container">
      <UserHeader />
      <Head title="Minha Conta" />

      <Routes>
        <Route path="/" element={<Feed user={user.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
