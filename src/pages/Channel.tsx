import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import VideoShowcase from "@/components/VideoShowcase";
import { Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

const MotionInput = motion(Input);
const MotionBell = motion(Bell);

export default function Channel() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isSubscribed, setSubscribed] = useState<boolean>(false);

  function OnVideoClick(title: string) {
    navigate("/video/?v=" + title);
  }

  function OnSubscriptionClick() {
    setSubscribed(true);
  }

  return (
    <>
      <section className="h-72 w-full flex items-center px-12 gap-x-8">
        <div className="size-32 rounded-full overflow-hidden object-cover">
          <img src="https://github.com/shadcn.png" />
        </div>
        <div className="h-30 w-[40rem] grid grid-cols-1 grid-rows-[1rem_1.5rem_auto] gap-y-3">
          <div className="font-bold">Channel Name</div>
          <div className="line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto dolorum
            saepe sint necessitatibus eligendi officia eius atque perspiciatis. Obcaecati excepturi
            deserunt tempora nostrum dolores, quidem autem laboriosam debitis numquam.
          </div>
          <div>
            {isSubscribed ? (
              <Button>
                <MotionBell
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -15, 15, -10, 10, -5, 5, 0] }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                />
                <Separator orientation="vertical" />
                <span>Subscribed</span>
              </Button>
            ) : (
              <Button onClick={OnSubscriptionClick}>
                <span>Subscribe</span>
              </Button>
            )}
          </div>
        </div>
      </section>
      <Separator orientation="horizontal" />
      <section>
        <div className="flex flex-1 justify-between items-center pt-3">
          <div className="pl-3">All Videos</div>
          <div className="relative flex justify-center items-center space-x-3">
            <form>
              <MotionInput
                type="search"
                initial={{ width: "32px" }}
                animate={{
                  width: isExpanded ? "180px" : "32px",
                }}
                transition={{ ease: "linear", duration: 0.3 }}
                onFocus={() => setIsExpanded(true)}
                onBlur={() => setIsExpanded(false)}
                className={isExpanded ? "pl-8" : ""}
              />
            </form>
            <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-2 gap-y-3 px-3 py-2">
          {test.map((data, index) => (
            <VideoShowcase
              key={index}
              title={data.title}
              poster={data.poster}
              source={data.videoSrc}
              views={data.views}
              channelName={data.channel.name}
              channelPic={data.channel.pic}
              onClick={() => OnVideoClick(data.videoSrc)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
