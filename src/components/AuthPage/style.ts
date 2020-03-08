import { css } from '@emotion/core';
import { colors } from '../../theme';

export const pageStyle = css({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const wrapperStyle = css({
  width: '500px',
  padding: '48px',
  borderRadius: 4,
  backgroundColor: colors.white,
  boxShadow: `0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11), 
              0 6px 8px rgba(0,0,0,0.11),
              0 8px 16px rgba(0,0,0,0.11)`,
  '@media (max-width: 768px)': {
    width: '100%',
    height: '100%',
  },
});

export const titleStyle = css({
  width: 128,
  wordBreak: 'break-word',
  lineHeight: 1,
  fontSize: 36,
  marginBottom: 48,
  color: colors.secondary,
});

export const greatingMessage = css({
  color: '#000',
  fontSize: 36,
  fontWeight: 'normal',
  marginBottom: 16,
});

export const redirectMessage = css({
  display: 'block',
  color: colors.gray,
  fontSize: 16,
  marginBottom: 48,

  a: {
    color: colors.primary,
    textDecoration: 'underline',

    ':hover, :focus': {
      color: colors.primaryHover,
    },
  },
});
