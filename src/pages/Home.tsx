import VideoShowcase from "@/components/VideoShowcase";
import { useNavigate } from "react-router-dom";

const test = [
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "../../../file_server/uploads/janella ooi/ABYU7821.mp4",
    views: 1230,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
];

export default function Home() {
  const navigate = useNavigate();

  function OnVideoClick(title: string) {
    navigate("/video/?v=" + title);
  }

  return (
    <section className="grid grid-cols-4 gap-x-2 gap-y-3 px-3 py-2">
      {test.map((data, index) => (
        <VideoShowcase
          key={index}
          title={data.title}
          poster={data.poster}
          source={data.videoSrc}
          views={data.views}
          channelName={data.channel.name}
          channelPic={data.channel.pic}
          showChannelInfo
          onClick={() => OnVideoClick(data.videoSrc)}
        />
      ))}
    </section>
  );
}
