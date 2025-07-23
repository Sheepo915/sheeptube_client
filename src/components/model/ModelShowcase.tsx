import {ModelShowcaseCard} from "@/components/model";

const test = new Array(10).fill(1)

export default function ModelShowcase() {

  return (
    <>
      {
        test.map((v, index) => (
          <ModelShowcaseCard key={index} name={v} pic={"https://placehold.co/600"} videos={100} views={1000}/>
        ))
      }
    </>
  )
}
