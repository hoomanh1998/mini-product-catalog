import CreateProductForm from '@/components/products/create-product-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - Add New Product',
};

export default function CreateProductPage() {
  return <CreateProductForm />;
}
