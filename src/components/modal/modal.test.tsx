import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Modal from './modal';

beforeAll(() => {
  window.HTMLDialogElement.prototype.showModal = jest.fn();
});

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('<Modal />', () => {
  const mock_back = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ back: mock_back });
    mock_back.mockClear();
  });

  it('should render modal with content', () => {
    render(
      <Modal>
        <p>Test Content</p>
      </Modal>,
    );
    expect(screen.getByText(/Test Content/)).toBeInTheDocument();
  });
});
