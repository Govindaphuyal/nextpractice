import Link from "next/link"
import {Card} from "@/app/component/card"

export default function News() {
  return (
    <div>
        <Card>
        <div>New  feed</div>
      <div>
              <Link href="/dashboard/archive">Default</Link>
           </div>
        </Card>
    </div>
  )
}
