import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadIcon } from "lucide-react";

export default function Studio() {
  return (
    <>
      <section className="w-full flex justify-between items-center px-4 py-2 gap-x-8">
        <div>
          <h2>Your Channel</h2>
        </div>
        <div>
          <Button variant="outline">
            <UploadIcon />
            <span>Upload</span>
          </Button>
        </div>
      </section>
      <Separator orientation="horizontal" />
      <section className="px-4 py-2">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </section>
    </>
  );
}
