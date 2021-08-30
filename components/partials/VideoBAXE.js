import YouTube from 'react-youtube'

const VideoBAXE = ({
  videoID,
  isVideoShow,
  onClickBackground,
  onEndVideo
}) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      controls: 1
    },
  }

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.6)',
      height: '100%',
      width: '100%',
      zIndex: '1000',
      position: 'fixed',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      display: isVideoShow ? 'flex' : 'none'
    }} onClick={onClickBackground}>
      <YouTube
        className="mfp-hide embed-responsive embed-responsive-21by9"
        onEnd={onEndVideo}
        videoId={videoID}
        opts={opts}
        onReady={_onReady}
      />
    </div>
  )
}

export default VideoBAXE