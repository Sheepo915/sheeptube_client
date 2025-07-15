import Hls from "hls.js";
import { useEffect, useRef } from "react";

interface VideoPlayerProps extends React.HTMLProps<HTMLVideoElement> {
  src: string;
}

export default function VideoPlayer({ src, ...props }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return

    let hls: Hls;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      hls = new Hls({
        debug: true,
      });
      hls.loadSource(src);
      hls.attachMedia(videoRef.current as HTMLVideoElement);

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error("Fatal network error. Try to recover.");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error("Fatal media error. Try to recover.");
              hls.recoverMediaError();
              break;
            default:
              console.error("Unrecoverable error. Destroying HLS.");
              hls.destroy();
              break;
          }
        }
      });
    } else {
      console.log("load");
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    }
  }, [src]);

  return <video ref={videoRef} controls {...props}></video>;
}
