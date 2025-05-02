import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import AddNewProductButton from './add-new-product-button';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('<AddNewProductButton />', () => {
  const push = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
    push.mockClear();
  });

  it('renders button and triggers router.push on click', () => {
    render(<AddNewProductButton />);
    const button = screen.getByRole('button', { name: /add new product/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(push).toHaveBeenCalledWith('?show_modal=add');
  });
});
