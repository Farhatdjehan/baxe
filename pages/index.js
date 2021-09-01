import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import { Header, Footer, Footer2, VideoBAXE } from '../components/partials'

import Banner from '../components/sections/Banner'
import Welcome from '../components/sections/Welcome'
import DownloadApp from '../components/sections/DownloadApp'
import Features from '../components/sections/Features'

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)

  const closeVideo1 = () => {
    setShowVideo(false)
  }

  const openVideo1 = () => {
    setShowVideo(true)
  }

  const openVideo2 = () => {
    setShowVideo(true)
  }
  
  return (
    <>
      <VideoBAXE
        isVideoShow={showVideo}
        onClickBackground={closeVideo1}
        onEndVideo={closeVideo1}
        videoID="L-zgF2f86i8"
      />
      <VideoBAXE
        isVideoShow={showVideo}
        onClickBackground={closeVideo1}
        onEndVideo={closeVideo1}
        videoID="3_2065uJzcU"
      />
      <Header />
      <Container fluid>
        <Banner onClickLearnMore={openVideo1} />
      </Container>
      <Welcome onClickWatchNow={openVideo2} />
      <DownloadApp />
      <Features onClickWatchNow={openVideo2} />
      <Footer />
      <Footer2 />
    </>
  )  
}
