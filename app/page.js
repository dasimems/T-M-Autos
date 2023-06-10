import { About, HistoricalCars, HomeBanner, Review, Service } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    
      <HomeBanner />

      <Service />

      <HistoricalCars />

      <About />

      <Review />

    </>
  )
}
