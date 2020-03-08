import React, { FC, InputHTMLAttributes } from 'react';
import classnames from 'classnames';

import * as style from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: FC<Props> = (props) => {
  const { label, error, id, type = 'text', ...rest } = props;

  const inputClassName = classnames({
    'has-error': Boolean(error),
  });

  return (
    <div css={style.formGroupStyle}>
      <label css={style.labelStyle} htmlFor={id}>
        {label}
      </label>
      <input
        css={style.inputStyle}
        className={inputClassName}
        type={type}
        id={id}
        {...rest}
      />
      {error && <span css={style.errorStyle}>{error}</span>}
    </div>
  );
};

export default Input;
