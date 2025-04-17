import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {

  const  { totalPaidInvoices, totalPendingInvoices, numberOfInvoices,
    numberOfCustomers } = await fetchCardData();
 
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

       <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> 
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
<div className="group relative rounded-xl bg-white p-2 shadow-sm ring-1 ring-gray-200 transition-all duration-300 ease-in-out hover:shadow-lg hover:ring-blue-300">
  <div className="flex items-center justify-between p-4">
    <div className="flex items-center">
      {Icon ? <Icon className="h-5 w-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" /> : null}
      <h3 className="ml-2 text-sm font-medium text-gray-900">{title}</h3>
    </div>
    <span className="hidden group-hover:flex items-center text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      View details
    </span>
  </div>
  <div className="overflow-hidden rounded-lg">
    <p
      className={`${lusitana.className}
        truncate bg-gray-50 px-4 py-8 text-center text-2xl font-semibold transition-all duration-300 ease-in-out group-hover:bg-blue-50 group-hover:text-blue-700`}
    >
      {value}
    </p>
  </div>
  <div className="absolute inset-0 rounded-xl bg-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]" aria-hidden="true"></div>
</div>
);
}
