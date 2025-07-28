import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { UploadIcon } from "lucide-react";
import {useNavigate} from "react-router-dom";
import StudioDashboard from "@/pages/studio/StudioDashboard.tsx";
import StudioVideos from "@/pages/studio/StudioVideos.tsx";

export default function Studio() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/studio/upload");
  }

  return (
    <>
      <section className="w-full flex justify-between items-center px-4 py-2 gap-x-8">
        <div>
          <h2>Your Channel</h2>
        </div>
        <div>
          <Button variant="outline" onClick={handleNavigate}>
            <UploadIcon/>
            <span>Upload</span>
          </Button>
        </div>
      </section>
      <Separator orientation="horizontal"/>
      <section className="px-4 py-2">
        <Tabs defaultValue="dashboard">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <StudioDashboard/>
          </TabsContent>
          <TabsContent value="videos">
            <StudioVideos/>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};