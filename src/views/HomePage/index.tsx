import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../globalContext';

const HomePage = () => {
  const history = useHistory();
  const context = useContext(GlobalContext);

  if (!context.userId) history.push('/login');

  return <div>Pocetna</div>;
};

export default HomePage;
