import type { Metadata } from 'next';
import NewsClient from './NewsClient';

export const metadata: Metadata = {
  title: 'News & Updates',
};

export default function NewsPage() {
  return <NewsClient />;
}
