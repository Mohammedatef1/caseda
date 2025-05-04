import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
  imgSrc: string
}

const Phone: React.FC<PhoneProps> = ({dark = false, imgSrc, className}) => {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}>
      <img src={dark? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'} alt="" className="pointer-events-none z-50 select-none" />
      
      <div className="absolute -z-10 inset-0">
        <img src={imgSrc} alt="" className="object-cover" />
      </div>
    </div>
  )
}

export default Phone