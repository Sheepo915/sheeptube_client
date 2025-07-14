import VideoShowcase from "@/components/VideoShowcase";

const test = [
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
  {
    title: "Test Video",
    poster: "https://placehold.co/1920x1080",
    videoSrc: "",
    views: 1230,
    likes: 200,
    channel: {
      name: "Test Channel",
      pic: "https://placehold.co/80",
    },
  },
];

export default function Home() {
  return (
    <section className="grid grid-cols-4 gap-x-2 gap-y-3 px-3 py-2">
      {test.map((data, index) => (
        <VideoShowcase key={index} data={data} />
      ))}
    </section>
  );
}
