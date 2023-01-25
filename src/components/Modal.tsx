import { ReactNode } from "react";

type ModalType = {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default ({children, isOpen, toggle}: ModalType) => {
  
  return (
    <>
      {isOpen && (
        <div className="flex justify-center items-center bg-black/[.55] fixed top-0 w-full h-screen z-20 overscroll-none" onClick={toggle}>
          <div 
            onClick={(e) => e.stopPropagation()}
            className="block bg-white p-3 rounded-md w-3/4 h-[360px]"
          >
            {children}
          </div>
        </div>
      )}
    </>    
  );    
}
