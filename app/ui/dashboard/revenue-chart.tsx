import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';


// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const revenue = await fetchRevenue(); // Fetch data inside the component

  const chartHeight = 350;
  // NOTE: Uncomment this code in Chapter 7

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

   if (!revenue || revenue.length === 0) {
     return <p className="mt-4 text-gray-400">No data available.</p>;
   }

  return (
<div className="w-full md:col-span-4">
  <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl font-semibold text-gray-800`}>
    Recent Revenue
  </h2>
  
  <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-md">
    <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-gray-50 p-4 md:gap-4">
      <div
        className="mb-6 hidden flex-col justify-between text-sm text-gray-500 sm:flex"
        style={{ height: `${chartHeight}px` }}
      >
        {yAxisLabels.map((label) => (
          <p key={label} className="font-medium">{label}</p>
        ))}
      </div>

      {revenue.map((month) => (
        <div key={month.month} className="flex flex-col items-center gap-2 group">
          <div className="relative w-full">
            <div
              className="w-full rounded-t-md bg-blue-400 transition-all duration-300 group-hover:bg-blue-500"
              style={{
                height: `${(chartHeight / topLabel) * month.revenue}px`,
              }}
            ></div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              ${month.revenue.toLocaleString()}
            </div>
          </div>
          <p className="-rotate-90 text-sm text-gray-500 sm:rotate-0 transition-colors duration-300 group-hover:text-gray-800 font-medium">
            {month.month}
          </p>
        </div>
      ))}
    </div>
    
    <div className="flex items-center pb-2 pt-6 justify-between">
      <div className="flex items-center">
        <CalendarIcon className="h-5 w-5 text-gray-500" />
        <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
      </div>
      <div className="flex gap-2 text-sm">
        <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium flex items-center">
          <span>Download</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        </button>
        <span className="text-gray-300">|</span>
        <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium">View detailed  report</button>
      </div>
    </div>
  </div>
</div>  );
}
