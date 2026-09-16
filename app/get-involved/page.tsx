import type { Metadata } from 'next';
import GetInvolvedClient from './GetInvolvedClient';

export const metadata: Metadata = {
  title: 'Get Involved',
};

export default function GetInvolvedPage() {
  return <GetInvolvedClient />;
}
