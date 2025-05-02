import { render, screen } from '@testing-library/react';
import HeaderTitle from './header-title';

describe('<HeaderTitle />', () => {
  it('renders the given title text', () => {
    render(<HeaderTitle title="Dashboard" />);
    const heading = screen.getByRole('heading', { name: /dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  it('uses the correct HTML tag (h1)', () => {
    render(<HeaderTitle title="Settings" />);
    const heading = screen.getByRole('heading', { name: /settings/i });
    expect(heading.tagName).toBe('H1');
  });

  it('applies default styles', () => {
    render(<HeaderTitle title="Profile" />);
    const heading = screen.getByText('Profile');
    expect(heading).toHaveClass(
      'text-2xl',
      'capitalize',
      'font-bold',
      'mr-auto',
    );
  });

  it('accepts and applies custom className', () => {
    render(<HeaderTitle title="Users" className="text-red-500" />);
    const heading = screen.getByText('Users');
    expect(heading).toHaveClass('text-red-500');
  });
});
