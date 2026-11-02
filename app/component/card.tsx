
export  const Card=({ children }:{children:React.ReactNode})=> {
  return (
    <div>
      <div className="w-full rounded-xl  shadow-md border p-5">
 {children}
 
</div>
    </div>
  )
}
