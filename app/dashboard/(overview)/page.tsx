import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Suspense } from 'react';
import LandmarkCard from '@/app/ui/dashboard/landMarkCard';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Dashboard',
};

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
};

export default async function Page() {
  const res = await fetch('https://api.vercel.app/blog');
  const posts: Post[] = await res.json();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>

      {/* Landmarks Section */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Latest Blog Posts</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li key={post.id}>
              <LandmarkCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
