import { render, screen } from '@testing-library/react';
import { useFormStatus } from 'react-dom';
import SignupButton from './signup-button';

jest.mock('@/services/auth/actions', () => ({
  signup: jest.fn(),
}));

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}));

describe('<SignupButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Sign Up" when not pending', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
    render(<SignupButton />);
    const button = screen.getByRole('button', { name: /sign up/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Sign Up');
    expect(button).not.toBeDisabled();
  });

  it('renders "Loading..." and disables button when pending', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });
    render(<SignupButton />);
    const button = screen.getByRole('button', { name: /loading/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Loading...');
  });

  it('renders the button with formAction set', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
    render(<SignupButton />);
    const button = screen.getByRole('button', { name: /sign up/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('formaction');
  });
});
