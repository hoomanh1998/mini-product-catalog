import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('<Button />', () => {
  it('renders with default props', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600');
  });

  it('renders with outline variant and red color', () => {
    render(
      <Button variant="outline" color="red">
        Delete
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Delete' });
    expect(button).toHaveClass('border-red-600', 'text-red-600');
  });

  it('renders with lg size', () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByRole('button', { name: 'Large' });
    expect(button).toHaveClass('px-5', 'py-3', 'text-lg');
  });

  it('calls onClick when clicked', () => {
    const handle_click = jest.fn();
    render(<Button onClick={handle_click}>Press</Button>);
    const button = screen.getByText('Press');
    fireEvent.click(button);
    expect(handle_click).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Styled</Button>);
    const button = screen.getByText('Styled');
    expect(button).toHaveClass('custom-class');
  });

  it('is focusable with keyboard (tab)', () => {
    render(<Button>Focusable</Button>);
    const button = screen.getByRole('button', { name: 'Focusable' });
    button.focus();
    expect(button).toHaveFocus();
  });

  it('is disabled when "disabled" prop is set', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
  });
});
