import { FC, useState, FormEventHandler, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useFormFields from 'hooks/useFormFields';
import validateEmail from 'utils/validateEmail';
import auth from 'services/api/auth';
import { errorNotification } from 'services/notification';

import Input from 'components/Input';
import Button from 'components/Button';

import AuthPage from '../templates/Auth';
import { greatingMessage, redirectMessage } from '../templates/Auth.style';

import { GlobalContext } from '../globalContext';

type State = 'idle' | 'submitting';

const formFields = {
  email: '',
  password: '',
};

const validation = {
  email: {
    validator: validateEmail,
    error: 'Please insert valid email',
  },
  password: {
    validator: (v: string): boolean => v.length > 6,
    error: 'Password must be at least 6 character long',
  },
};

const Login: FC = () => {
  const context = useContext(GlobalContext);
  const history = useHistory();
  const [state, setState] = useState<State>('idle');
  const [fields, handleFieldChange, errors] = useFormFields(formFields, validation);

  const { email, password } = fields;

  const isButtonDisabled =
    !email ||
    !password ||
    Boolean(errors.email) ||
    Boolean(errors.password) ||
    state === 'submitting';

  const handleFormSubmit: FormEventHandler = async (e): Promise<void> => {
    e.preventDefault();

    setState('submitting');

    const data = {
      email,
      password,
    };

    const response = await auth.login(data);

    if (response.ok) {
      const parsed = await response.json();

      context.setId(parsed.id);
      history.push('/');
    } else {
      const error = await response.text();

      errorNotification(error);
      setState('idle');
    }
  };

  return (
    <AuthPage>
      <h3 css={greatingMessage}>Welcome back.</h3>

      <span css={redirectMessage}>
        First time around here? <Link to="/register">Register</Link>
      </span>

      <form onSubmit={handleFormSubmit}>
        <Input
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={handleFieldChange}
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={handleFieldChange}
          error={errors.password}
        />

        <Button disabled={isButtonDisabled} type="submit" css={{ marginTop: 26 }}>
          Login
        </Button>
      </form>
    </AuthPage>
  );
};

export default Login;
