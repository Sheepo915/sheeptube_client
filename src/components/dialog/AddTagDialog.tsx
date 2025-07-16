import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormLabel } from "@/components/ui/form";
import { AddTagSchema, type AddTagSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import InputGroup from "../form/InputGroup";

export default function AddTagsDialog() {
  const { formState, ...form } = useForm<AddTagSchemaType>({
    resolver: zodResolver(AddTagSchema),
  });

  function onSubmit() {
    console.log(form.watch())
  }

  return (
    <Dialog>
      <Form formState={formState} {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogTrigger asChild>
            <Button variant="outline">Add Tag</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add A New Tag</DialogTitle>
              <DialogDescription>
                Add a new tag for your video, it will also be publicly available for everyone.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <FormField
                name="tag"
                control={form.control}
                render={({ field }) => (
                  <InputGroup>
                    <FormLabel>Tag</FormLabel>
                    <FormControl>
                      <Input placeholder="Tag" {...field} />
                    </FormControl>
                  </InputGroup>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Add</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  )
}