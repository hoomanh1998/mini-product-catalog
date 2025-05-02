import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCardType } from '@/models/product.model';
import { use_product_card_type_store } from '@/store/product-card-type.store';
import ProductCardTypeContainer from '@/components/product-card-type-container';

jest.mock('@/store/product-card-type.store', () => ({
  use_product_card_type_store: jest.fn(),
}));

describe('<ProductCardTypeContainer />', () => {
  const set_product_card_type = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (use_product_card_type_store as unknown as jest.Mock).mockReturnValue({
      product_card_type: ProductCardType.Default,
      set_product_card_type,
    });
  });

  it('renders both buttons', () => {
    render(<ProductCardTypeContainer />);
    expect(
      screen.getByRole('button', { name: /default/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /compact/i }),
    ).toBeInTheDocument();
  });

  it('calls set_product_card_type when compact is clicked', () => {
    render(<ProductCardTypeContainer />);
    const compactButton = screen.getByRole('button', { name: /compact/i });
    fireEvent.click(compactButton);
    expect(set_product_card_type).toHaveBeenCalledWith(ProductCardType.Compact);
  });

  it('calls set_product_card_type when default is clicked', () => {
    render(<ProductCardTypeContainer />);
    const defaultButton = screen.getByRole('button', { name: /default/i });
    fireEvent.click(defaultButton);
    expect(set_product_card_type).toHaveBeenCalledWith(ProductCardType.Default);
  });
});
