import React from 'react'

export default function ArticleLayout({ children }:{children:React.ReactNode}) {
  return (
    <div>
        <h1>helo Layout</h1>
      { children }
    </div>
  )
}
