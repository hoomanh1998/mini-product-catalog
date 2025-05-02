import { ProductModel } from '@/models/product.model';

export const mock_product: ProductModel = {
  id: 1,
  name: 'Test Product',
  description: 'This is a test product',
  price: 1234.56,
  image_url: 'https://example.com/image.jpg',
  created_at: new Date().toISOString(),
};
