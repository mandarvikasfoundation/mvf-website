import type { Metadata } from 'next';
import MandarsPrideClient from './MandarsPrideClient';

export const metadata: Metadata = {
  title: "Mandar's Pride",
};

export default function MandarsPridePage() {
  return <MandarsPrideClient />;
}
