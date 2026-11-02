import Link from "next/link"
import {Card} from "../../component/card"

export default function profile() {
  return (
    <div>
        <Card >

      new Profile
      <Link href="/profile"></Link>
        </Card>
    </div>
  )
}
