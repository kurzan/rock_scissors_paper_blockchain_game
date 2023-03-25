import { FC, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.querySelector('#modals') as HTMLElement;

type TModal = {
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
};

const Modal:FC<TModal> = ({children, title, onClose}) => {

  const close = useCallback(() => {
    onClose && onClose();
  }, [onClose])

  const onEscClose = useCallback((evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      close();
    }
  }, [close]);

  useEffect(() => {
    document.addEventListener("keydown", onEscClose);
    
    return () => {
      document.removeEventListener("keydown", onEscClose);
    };
  }, [onEscClose]);


  return ReactDOM.createPortal(
    <>
      <div onClick={close} className="fixed min-w-full min-h-full z-2 top-0  bg-gray-700 bg-opacity-40"></div>
      <div className="fixed top-[50%] p-6 left-[50%] -translate-x-[50%] -translate-y-[50%] w-96 max-h-full rounded-xl shadow-lg flex flex-col bg-gray-700 text-white" >
        <p className="text-2xl font-semibold">{title}</p>
        {children}
      </div>
    </>,
    modalRoot
  )
};

export default Modal;
