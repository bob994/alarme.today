import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as style from './Header.style';
import Button from './Button';

import { GlobalContext } from '../globalContext';

const Header = () => {
  const { setId } = useContext(GlobalContext);
  const history = useHistory();

  const logout = (): void => {
    setId('');
    history.push('/login');
  };

  return (
    <div css={style.headerStyle}>
      <Link to="/" css={style.brandStyle}>
        Alarme.today
      </Link>

      <Button isLink onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
