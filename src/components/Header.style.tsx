/* eslint-disable import/prefer-default-export */
import { css } from '@emotion/core';
import { colors } from '../theme';

export const headerStyle = css({
  backgroundColor: colors.white,
  padding: '16px 267px',
  marginBottom: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: `0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11)`,
});

export const brandStyle = css({
  fontSize: 24,
  fontWeight: 'bold',
  color: colors.secondary,
  textDecoration: 'none',
});
