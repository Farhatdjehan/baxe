import React, { useState } from "react";
import { Container } from "react-bootstrap";

import DocumentMeta from "react-document-meta";
import { Header, Footer, Footer2, VideoBAXE } from "../components/partials";

import Banner from "../components/sections/Banner";
import Welcome from "../components/sections/Welcome";
import DownloadApp from "../components/sections/DownloadApp";
import Features from "../components/sections/Features";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const closeVideo1 = () => {
    setShowVideo(false);
  };

  const openVideo1 = () => {
    setShowVideo(true);
  };

  const openVideo2 = () => {
    setShowVideo(true);
  };
  const meta = {
    meta: {
      name: "facebook-domain-verification",
      content: "qmqndao91m3dfgjl2x5cx4sbjvji0l",
      charset: "utf-8",
    },
  };
  return (
    <>
      <DocumentMeta {...meta}>
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
      </DocumentMeta>
    </>
  );
}
