import Hls from "hls.js";
import { useEffect, useRef } from "react";

interface VideoPlayerProps extends React.HTMLProps<HTMLVideoElement> {
  src: string;
}

export default function VideoPlayer({ src, ...props }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hls = new Hls({
      debug: true,
    });

    if (Hls.isSupported() && videoRef != null) {
      hls.loadSource(src);
      hls.attachMedia(videoRef.current as HTMLVideoElement);
      hls.on(Hls.Events.ERROR, (err) => {
        console.log(err);
      });
    } else {
      console.log("load");
    }
  }, [src]);

  return <video ref={videoRef} controls {...props}></video>;
}
