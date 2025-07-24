import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";

const MotionBell = motion(Bell);

export default function ChannelHeader({
  isSubscribed,
  OnSubscriptionClick,
}: {
  isSubscribed: boolean;
  OnSubscriptionClick: () => void;
}) {
  return (
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
  );
}
