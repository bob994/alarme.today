import { FC, FormEventHandler, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthPage from '../../components/AuthPage';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  greatingMessage,
  redirectMessage,
} from '../../components/AuthPage/style';
import useFormFields from '../../hooks/useFormFields';
import validateEmail from '../../utils/validateEmail';
import auth from '../../services/api/auth';
import {
  errorNotification,
  successNotification,
} from '../../services/notification';

type State = 'idle' | 'submitting';

const formFields = {
  email: '',
  password: '',
  username: '',
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
  username: {
    validator: (v: string): boolean => v.length > 6,
    error: 'Username must be at least 6 character long',
  },
};

const RegisterPage: FC = () => {
  const history = useHistory();
  const [state, setState] = useState<State>('idle');
  const [fields, handleFieldChange, errors] = useFormFields(
    formFields,
    validation
  );

  const { email, password, username } = fields;

  const isButtonDisabled =
    !username.length ||
    !email.length ||
    !password.length ||
    Boolean(errors.email) ||
    Boolean(errors.password) ||
    Boolean(errors.username) ||
    state === 'submitting';

  const handleSubmit: FormEventHandler = async (e): Promise<void> => {
    e.preventDefault();

    const data = {
      email,
      password,
      username,
    };

    const response = await auth.register(data);

    if (response.ok) {
      history.push('/login');

      successNotification('Registration complete');
    } else {
      const error = await response.text();

      errorNotification(error);
      setState('idle');
    }
  };

  return (
    <AuthPage>
      <h3 css={greatingMessage}>Welcome.</h3>

      <span css={redirectMessage}>
        Already have an account? <Link to="/login">Login</Link>
      </span>

      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          id="username"
          value={username}
          onChange={handleFieldChange}
          error={errors.username}
        />

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

        <Button
          disabled={isButtonDisabled}
          type="submit"
          css={{ marginTop: 26 }}
        >
          Register
        </Button>
      </form>
    </AuthPage>
  );
};

export default RegisterPage;
