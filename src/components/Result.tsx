import { FC } from "react";
import { TGetResult } from "./Game";
import { getStatus } from "./services/utils";

const Result:FC<TGetResult> = ({status, received}) => {
  return(
    <div className="mt-8 mb-8 flex flex-col text-center self-center top-[50%] p-6">
      <p className="text-3xl font-semibold">{getStatus(status)}</p>
      <p>Получено: {received} tBNB</p>
    </div>
  )
};

export default Result;