import { FC } from "react";


type TButton = {
  disabled?: boolean,
  title: string,
  onClick: any
}

const Button: FC<TButton> = ({disabled, title, onClick}) => {

  const buttonHandle = (event: any) => {
    event.preventDefault();
    onClick();
  }

  return(
    <button disabled={disabled ? true : false} onClick={buttonHandle} className={"mx-auto py-2 px-4 mt-4 rounded-lg bg-indigo-600 text-white disabled:opacity-50"}>{title}</button>
  )
};

export default Button;