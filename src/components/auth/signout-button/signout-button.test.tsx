import { useFormStatus } from 'react-dom';
import { render, screen } from '@testing-library/react';
import SignOutButton from './signout-button';

jest.mock('@/services/auth/actions', () => ({
  signout: jest.fn(),
}));

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}));

describe('<SignOutButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Sign Out" when not pending', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
    render(<SignOutButton />);
    const button = screen.getByRole('button', { name: /sign out/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Sign Out');
    expect(button).not.toBeDisabled();
  });

  it('renders "Loading..." and disables button when pending', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });
    render(<SignOutButton />);
    const button = screen.getByRole('button', { name: /loading/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Loading...');
  });

  it('renders the button with formAction set', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
    render(<SignOutButton />);
    const button = screen.getByRole('button', { name: /sign out/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('formaction');
  });
});
