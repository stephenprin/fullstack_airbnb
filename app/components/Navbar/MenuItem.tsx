"use client"

interface MenuItemProps {
    onClick: () => void;
    title: string;
 }

const MenuItem:React.FC<MenuItemProps> = ({onClick, title}) => {
  return (
    <div onClick={onClick} className="px-4 py-3 hover:bg-neutral-100 transition font-semibold ">
       {title}
    </div>
  )
}

export default MenuItem
