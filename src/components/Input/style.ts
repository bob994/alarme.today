import { css } from '@emotion/core';

export const formGroupStyle = css({
  position: 'relative',
  marginBottom: 24,
});

export const inputStyle = css({
  border: '1px solid #898989',
  outline: 'none',
  width: '100%',
  display: 'block',
  fontSize: 16,
  color: '#898989',
  backgroundColor: '#FFF',
  borderRadius: 4,
  padding: '12px 16px',
  marginBottom: 12,

  ':focus': {
    borderColor: '#49BEB7',
    color: '#595959',
  },

  '&.has-error': {
    borderColor: '#F44242',
    color: '#F44242',
  },
});

export const labelStyle = css({
  display: 'block',
  width: '100%',
  height: '100%',
  marginBottom: 12,
  fontSize: 14,
  color: '#595959',
});

export const errorStyle = css({
  fontSize: 12,
  right: 0,
  color: '#F44242',
  position: 'absolute',
});
