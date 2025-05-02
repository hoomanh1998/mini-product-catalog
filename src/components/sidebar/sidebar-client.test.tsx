import { render, screen } from '@testing-library/react';
import { Routes } from '@/constants/routes.constant';
import SidebarClient from './sidebar-client';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('../auth/signout-button', () => {
  const signout_button = () => <button>Sign out</button>;
  signout_button.displayName = 'MockSignOutButton';
  return signout_button;
});

const mockedUsePathname = jest.requireMock('next/navigation')
  .usePathname as jest.Mock;

describe('SidebarClient', () => {
  it('renders sidebar with navigation links when not on login or signup routes', () => {
    mockedUsePathname.mockReturnValue(Routes.Dashboard);
    render(<SidebarClient is_authenticated={false} />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  it('does not render sidebar on login page', () => {
    mockedUsePathname.mockReturnValue(Routes.Login);
    const { container } = render(<SidebarClient is_authenticated={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('does not render sidebar on signup page', () => {
    mockedUsePathname.mockReturnValue(Routes.SignUp);
    const { container } = render(<SidebarClient is_authenticated={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('shows sign out button when authenticated', () => {
    mockedUsePathname.mockReturnValue(Routes.Dashboard);
    render(<SidebarClient is_authenticated={true} />);
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });
});
