import type { Metadata } from 'next';
import IndependenceDayClient from './IndependenceDayClient';

export const metadata: Metadata = {
  title: "Independence Day at Mandar's Pride Campus",
};

export default function IndependenceDayPost() {
  return <IndependenceDayClient />;
}
