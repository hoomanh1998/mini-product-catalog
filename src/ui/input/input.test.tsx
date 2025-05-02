import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './input';

describe('<Input />', () => {
  it('renders with a label and input field', () => {
    render(<Input label="Email" name="email" />);
    const label = screen.getByLabelText('Email');
    const input = screen.getByRole('textbox');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'email');
  });

  it('renders with a custom className', () => {
    render(<Input label="Email" name="email" className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  it('focuses on the input when user clicked', async () => {
    render(<Input label="Email" name="email" />);
    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    expect(input).toHaveFocus();
  });

  it('applies the error class when error is passed', () => {
    render(<Input label="Email" name="email" error="Invalid email" />);
    const input = screen.getByRole('textbox');
    const errorMessage = screen.getByText('Invalid email');
    expect(input).toHaveClass('border-red-500', 'focus:ring-red-500');
    expect(errorMessage).toBeInTheDocument();
  });

  it('does not show an error message when error is not passed', () => {
    render(<Input label="Email" name="email" />);
    const input = screen.getByRole('textbox');
    const errorMessage = screen.queryByText('Invalid email');
    expect(input).not.toHaveClass('border-red-500');
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('correctly binds aria attributes when error is present', () => {
    render(<Input label="Email" name="email" error="Invalid email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'email-error');
  });

  it('correctly updates input value', () => {
    render(<Input label="Email" name="email" />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input).toHaveValue('test@example.com');
  });
});
