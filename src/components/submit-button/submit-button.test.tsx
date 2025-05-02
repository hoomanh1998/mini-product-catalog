import { useFormStatus } from 'react-dom';
import { render, screen } from '@testing-library/react';
import SubmitButton from '@/components/submit-button/submit-button';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(),
}));

describe('<SubmitButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Submit" when not pending', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });
    render(<SubmitButton />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit');
    expect(button).not.toBeDisabled();
  });

  it('renders "Submitting..." and disables button when pending', () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });
    render(<SubmitButton />);
    const button = screen.getByRole('button', { name: /submitting/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
