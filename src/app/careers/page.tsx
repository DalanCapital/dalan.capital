import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

const openPositions = [
    {id:1, title: 'Forex Analytics Expert', unit: 'Analytics', office: 'Hybrid - Dubai'},
    {id:2, title: 'Financial Modelling', unit: 'AI', office: 'Hybrid - Dubai'},
    {id:3, title: 'Algo Trading Engineer', unit: 'Algo Trading', office: 'Hybrid - London'},
    {id:1, title: 'Forex Trader', unit: 'Trading', office: 'Hybrid - Dubai'},
    {id:1, title: 'Crypto Trader', unit: 'Trading', office: 'Remote - London'},
    {id:1, title: 'U.S. Stocks Trader', unit: 'Trading', office: 'Hybrid - NewYork'},
];

export default function Home() {
  return (
    <>
      <Header />
        <section className="p-10 mb-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption
                    className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Careers
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Dalan
                        open positions designed to help you to join to our team.</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Org. Unit
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Office
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Join Us
                    </th>
                </tr>
                </thead>
                <tbody>
                {openPositions.map((position) => (
                    <tr key={position.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {position.title}
                        </th>
                        <td className="px-6 py-4">
                            {position.unit}
                        </td>
                        <td className="px-6 py-4">
                            {position.office}
                        </td>
                        <td className="px-6 py-4">
                            <Link href="/contact" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Send
                                Resume</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
      <Footer />
    </>
  );
}
