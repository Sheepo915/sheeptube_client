import {randomString} from "@/utils";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";

const data = new Array(50).fill({
  video: randomString(10),
  videoName: randomString(8),
  totalViews: Math.random() * 10,
  totalLikes: Math.random() * 10,
})

export default function StudioVideos() {
  return (
    <section className="flex flex-1 overflow-y-scroll">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Video</TableHead>
            <TableHead>Video Name</TableHead>
            <TableHead>Total Views</TableHead>
            <TableHead>Total Likes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((value, index) => (
            <TableRow key={index}>
              <TableCell>{value.video}</TableCell>
              <TableCell>{value.videoName}</TableCell>
              <TableCell>{value.totalViews}</TableCell>
              <TableCell>{value.totalLikes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}