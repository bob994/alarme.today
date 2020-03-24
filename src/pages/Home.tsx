import React, { useContext, FC } from 'react';
import { useHistory } from 'react-router-dom';

import Header from 'components/Header';
import Card from 'components/Card';

import { GlobalContext } from '../globalContext';

const Home: FC = () => {
  const history = useHistory();
  const context = useContext(GlobalContext);

  // if (!context.userId) history.push('/login');

  return (
    <div>
      <Header />

      <main css={{ width: 1200, margin: '0 auto' }}>
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
};

export default Home;
