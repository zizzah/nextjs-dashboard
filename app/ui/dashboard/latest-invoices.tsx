import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
<div className="flex w-full flex-col md:col-span-4">
  <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl font-semibold text-gray-800`}>
    Latest Invoices
  </h2>
  <div className="flex grow flex-col justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-md">
    <div className="bg-white">
      {latestInvoices.map((invoice, i) => {
        return (
          <div
            key={invoice.id}
            className={clsx(
              'flex flex-row items-center justify-between py-4 px-6 hover:bg-gray-50 transition-colors duration-200 group cursor-pointer rounded-lg',
              {
                'border-t border-gray-100': i !== 0,
              },
            )}
          >
            <div className="flex items-center">
              <div className="relative">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-4 rounded-full ring-2 ring-transparent group-hover:ring-blue-400 transition-all duration-300"
                  width={32}
                  height={32}
                />
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-green-500 hidden group-hover:block"></span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold md:text-base group-hover:text-blue-600 transition-colors duration-200">
                  {invoice.name}
                </p>
                <p className="hidden text-sm text-gray-500 sm:block group-hover:text-gray-700 transition-colors duration-200">
                  {invoice.email}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p
                className={`${lusitana.className} truncate text-sm font-medium md:text-base mr-2 group-hover:text-blue-600 transition-colors duration-200`}
              >
                {invoice.amount}
              </p>
              <span className="hidden group-hover:flex text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
        );
      })}
    </div>
    <div className="mt-2 border-t border-gray-100 pt-4">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 flex items-center">
          View all
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>  );
}
