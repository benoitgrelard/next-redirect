import Link from 'next/link';
import { Forms } from './forms';

export default function HomePage() {
  return (
    <main>
      <Forms />

      <br />

      <Link href="/email">Email</Link>
    </main>
  );
}
