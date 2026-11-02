import React from 'react'

export default function DashboardLayout(
 {
  children,
  news,
  profile,
  notifications,
  login
}: {
  children: React.ReactNode;
  news: React.ReactNode;
  profile: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;

}
) {
  const isLogged=true;
  return isLogged ?(
    <div>
        <h1>helo Layout</h1>
      { children }
      <div className="flex">
        <div className="flex flex-col">
        <div className="">{news}</div>
        <div className="">{profile}</div>
        </div>
                <div className=" flex flex-1">{login}</div>


        <div className=" flex flex-1">{notifications}</div>

      </div>
    </div>
  ):(
    login
  )
}

