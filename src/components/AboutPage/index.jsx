import React from 'react'
import SectionHero from './SectionHero'
import SectionStatistics from './SectionStatistics'

const AboutPage = () => {
  return (
    <div className={`overflow-hidden relative`}>

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={"https://ciscryp-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right1.a04e2be1.png"}
          heading="👋 About Us."
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />

        <SectionStatistics />

      </div>
    </div>
  )
}

export default AboutPage
