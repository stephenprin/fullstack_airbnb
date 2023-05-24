'use client'

interface HeadingProps { 
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading:React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
  return (
    <div className={`${center?"text-center":"text-left"}`} >
          <div className="text-2xl font-semibold   ">
              {title}
          </div>
          <div className="text-sm mt-2 font-light text-neutral-500">
                {subtitle}
            </div>
          
    </div>
  )
}

export default Heading
