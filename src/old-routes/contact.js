import Head from 'next/head'

import { Header } from '@/components/Header'
import { ContactHeader } from '@/components/ContactHeader'
import { ContactInfo } from '@/components/ContactInfo'
import { Map } from '@/components/Map'
import { FaqCTA } from '@/components/FaqCTA'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wavvy - Contact</title>
      </Head>

      <Header />
      <ContactHeader />
      <ContactInfo />
      <Map />
      <FaqCTA />
      <CallToAction />
      <Footer />
    </>
  )
}
