
const MenuOverlay = ({menuList, toggle}) => {
  return (
    <div className={`absolute left-0 min-h-full top-0 backdrop-blur-lg w-full text-center z-10 transition-all duration-300 ease-in-out
        ${toggle?"opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
    `}>
      {menuList.map((item) => (
        <h1 key={item.id} className="text-black text-[24px] mb-6 justify-center mt-10
        hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">{item.title}</h1>
      ))}
    </div>
  )
}

export default MenuOverlay
