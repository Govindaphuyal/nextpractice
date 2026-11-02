import React from 'react'
import {Card} from "@/app/component/card"
import Link from 'next/link'

export default function ArchivedNews() {
  return (
    <div>
      <Card>
        <div>archived</div>
        <div>
                <Link href="/dashboard">Archived</Link>
             </div>
      </Card>
    </div>
  )
}
