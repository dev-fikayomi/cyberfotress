import React, { ReactNode, useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

interface Props {
  children: ReactNode;
  service: string
}

const MobileService: React.FC<Props> = ({ children, service }) => {
  const [toggle, setToggle] = useState(false)
  function handleClick(){
    setToggle((prev)=>{
      return !prev
    })
  }
  return (
    <li className={toggle ? 'opened' : 'closed'}>
        <div>
            <a href='#'>{service}</a>
            {
              !toggle
              ?  <FaPlus  onClick={handleClick}/>
              : <FaMinus  onClick={handleClick}/>
            }
    
        </div>
        {children}
</li>
  );
};

export default MobileService;
