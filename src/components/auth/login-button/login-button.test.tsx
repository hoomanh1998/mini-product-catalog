import { render, screen } from '@testing-library/react';
import { useFormStatus } from 'react-dom';
import LoginButton from './login-button';

jest.mock('@/services/auth/actions', () => ({
  login: jest.fn(),
}));

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}));

describe('<LoginButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Login" when not pending', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
    render(<LoginButton />);
    const button = screen.getByRole('button', { name: /login/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Login');
    expect(button).not.toBeDisabled();
  });

  it('renders "Loading..." and disables button when pending', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });
    render(<LoginButton />);
    const button = screen.getByRole('button', { name: /loading/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Loading...');
  });

  it('renders the button with formAction set', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
    render(<LoginButton />);
    const button = screen.getByRole('button', { name: /login/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('formaction');
  });
});
