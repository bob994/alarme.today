import { css } from '@emotion/core';

export default css({
  border: 'none',
  backgroundColor: '#085F63',
  color: '#FFF',
  padding: '12px 24px',
  borderRadius: 4,
  width: '100%',

  ':hover:enabled, :focus, :active': {
    cursor: 'pointer',
    backgroundColor: '#49BEB7',
    outline: 'none',
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});
