/* eslint-disable react/button-has-type */
import { FC, ButtonHTMLAttributes } from 'react';

import * as buttonStyle from './style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLink?: boolean;
}

const Button: FC<Props> = ({ type = 'button', isLink = false, ...rest }) => (
  <button css={isLink ? buttonStyle.isLink : buttonStyle.button} {...rest} type={type} />
);

export default Button;
