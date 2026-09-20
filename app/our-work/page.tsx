import type { Metadata } from 'next';
import OurWorkClient from './OurWorkClient';

export const metadata: Metadata = {
  title: 'Our Works',
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
