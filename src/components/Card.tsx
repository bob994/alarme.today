/* eslint-disable @typescript-eslint/no-use-before-define */
import { css } from '@emotion/core';
import { FC } from 'react';
import { colors } from '../theme';

const Card: FC = () => {
  return (
    <div css={card}>
      <p css={cardTitle}>GistroFM</p>
      <a href="google.com" css={cardUrl}>
        https://www.mixcloud.com
      </a>
    </div>
  );
};

const card = css({
  borderRadius: 4,
  padding: 24,
  marginBottom: 24,
  backgroundColor: colors.white,
  borderLeft: '4px solid #F44242',
  boxShadow: `0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11)`,
});

const cardTitle = css({
  fontSize: 18,
  color: '#595959',
  marginBottom: 16,
});

const cardUrl = css({
  fontSize: 14,
  color: '#898989',
  textDecoration: 'none',
});

export default Card;
