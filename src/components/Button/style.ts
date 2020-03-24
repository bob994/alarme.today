import { css } from '@emotion/core';

const baseButton = css({
  border: 'none',
  backgroundColor: 'transparent',
  padding: '12px 24px',
  borderRadius: 4,

  ':hover:enabled, :focus, :active': {
    cursor: 'pointer',
    outline: 'none',
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

export const button = css(baseButton, {
  backgroundColor: '#085F63',
  color: '#FFF',
  width: '100%',

  ':hover:enabled, :focus, :active': {
    backgroundColor: '#49BEB7',
  },
});

export const isLink = css(baseButton, {
  color: '#898989',

  ':hover:enabled, :focus, :active': {
    outline: '1px solid #898989',
  },
});
