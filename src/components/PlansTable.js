import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import { Container } from '@/components/Container'
import {Button} from "@/components/Button";

const tiers = ['free', 'standard', 'pro', 'advance']

const features = [
  {
    name: 'Application Fee',
    tiers: {free:'Free', standard:'$159', pro:'$699', advance:'$3599'}
  },
  {
    name: 'Start Balance',
    tiers: {free:'$100', standard:'$1000', pro:'$10,000', advance:'$100,000'}
  },
  {
    name: 'Max. Balance',
    tiers: {free:'$1000', standard:'$10,000', pro:'$100,000', advance:'$1,000,000'}
  },
  {
    name: 'Scale Program',
    tiers: {free:'4X', standard:'2X', pro:'2X', advance:'2X'}
  },
  {
    name: 'Salary',
    tiers: { free: 'Not Available', standard: 'Not Available', pro: '1% AUM', advance: '3% AUM' },
  },
  {
    name: 'Salary Max. Amount',
    tiers: { free: 'Not Available', standard: 'Not Available', pro: 'Up to 850 USD', advance: 'Up to 25,000 USD' },
  },
  {
    name: 'Salary Min. Amount',
    tiers: { free: 'Not Available', standard: 'Not Available', pro: '$300', advance: '$5000' },
  },
  {
    name: 'Target',
    tiers: { free: '10%', standard: '10%', pro: '10%', advance: '10%' },
  },
  {
    name: 'Profit Split',
    tiers: { free: 'Not Available', standard: 'From 30%', pro: 'From 40%', advance: 'From 50%' },
  },
  {
    name: 'Max. Drawdown',
    tiers: { free: '5%', standard: '5%', pro: '3%', advance: '2%' },
  },
  {
    name: 'Max. Daily Loss',
    tiers: { free: '3%', standard: '3%', pro: '2%', advance: '1%' },
  },
  {
    name: 'Drowdown Method',
    tiers: { free: 'Start Balance', standard: 'Relative', pro: 'Relative', advance: 'Relative' },
  },
  {
    name: 'Leverage',
    tiers: { free: '>1:100', standard: '1:10', pro: '1:10', advance: '1:10' },
  },
  {
    name: 'Min. Monthly Gain',
    tiers: { free: '2%', standard: '5%', pro: '8%', advance: '10%'},
  },
  {
    name: 'Max. Daily Volume',
    tiers: { free: '500', standard: '2K', pro: '5K', advance: '20K'},
  },
  {
    name: 'Withdrawal Period',
    tiers: { free: 'Monthly', standard: 'Monthly', pro: 'Bi-Weekly', advance: 'Weekly'},
  },
  {
    name: 'Coaching',
    tiers: { free: true, standard: true, pro: true, advance: true},
  },
  {
    name: '24/7 Live Support',
    tiers: { free: true, standard: true, pro: true, advance: true},
  },
  {
    name: 'Verification',
    tiers: { free: false, standard: true, pro: true, advance: true},
  },
  {
    name: 'Insurance',
    tiers: { free: false, standard: false, pro: true, advance: true},
  },
  {
    name: 'Pro Account',
    tiers: { free: false, standard: false, pro: true, advance: true },
  },
  {
    name: 'Tax Coverage',
    tiers: { free: false, standard: false, pro: false, advance: true},
  },
  {
    name: 'FP&A',
    tiers: { free: false, standard: false, pro: false, advance: true},
  },
]

export function PlansTable() {
  return (
    <section
      id="plan-comparison-table"
      className="relative overflow-hidden bg-vanilla py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto flex max-w-lg flex-col items-center sm:max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="text-center text-4xl font-semibold leading-snug text-slate-900 sm:text-5xl sm:leading-snug md:mx-auto md:max-w-4xl xl:mx-0">
            A right place, for the right price.
          </h1>
          <div className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-slate-700">
            Compare the features and benefits of each plan. If you’re still
            unsure about anything feel free to{' '}
            <Link legacyBehavior href="/contact">
              <a className="font-medium text-slate-900 underline">
                reach out to us
              </a>
            </Link>
            .
          </div>
        </div>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="border-b border-gray-secondary-100">
              <tr>
                <th
                  scope="col"
                  className="py-2 pl-4 pr-3 text-left text-lg font-semibold text-slate-900 sm:pl-6"
                >
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier}
                    scope="col"
                    className="px-3 py-2 text-center text-lg font-semibold capitalize text-slate-900"
                  >
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={index % 2 === 0 ? 'bg-amber-50' : undefined}
                >
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-base font-medium text-slate-800 sm:pl-6">
                    {feature.name}
                  </td>
                  {tiers.map((tier) => (
                    <td key={tier} className="px-3 py-4">
                      {typeof feature['tiers'][tier] == 'boolean' ? (
                        <div className="flex w-full justify-center">
                          {feature['tiers'][tier] && (
                            <CheckCircleIcon className="h-5 w-5 shrink-0 text-slate-800" />
                          )}
                        </div>
                      ) : (
                        <p className="whitespace-nowrap text-center text-md text-slate-700">
                          {feature['tiers'][tier]}
                        </p>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot className="border-t border-gray-secondary-100">
                <tr style={{ display: 'flex', justifyContent: 'center' }}>
                  <td >
                    <Button href="#" className="mt-8 w-full">
                      Get Started
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button href="#" className="mt-8 w-full">
                      Get Started
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button href="#" className="mt-8 w-full">
                      Get Started
                    </Button>
                  </td>
                </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </section>
  )
}
