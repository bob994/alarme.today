import React, { FC } from 'react';

import * as style from './Auth.style';

const AuthPage: FC = ({ children }) => {
  return (
    <div css={style.pageStyle}>
      <div css={style.wrapperStyle}>
        <h1 css={style.titleStyle}>Alarme.today</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthPage;
