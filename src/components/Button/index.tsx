/* eslint-disable react/button-has-type */
import { FC, ButtonHTMLAttributes } from 'react';

import buttonStyle from './style';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ type = 'button', ...rest }) => (
  <button css={buttonStyle} {...rest} type={type} />
);

export default Button;
