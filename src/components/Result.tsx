import { FC } from "react";
import { TGetResult } from "./Game";
import { getChoice, getStatus } from "./services/utils";
import { Oval } from 'react-loader-spinner';

type TResult = TGetResult & {
  hash?: string,
  userChoice: number,
};

const Result:FC<TResult> = ({status, received, contractChoice, hash, userChoice}) => {
  return(
    <div className="mt-8 flex flex-col text-center self-center top-[50%] p-6">
      <div className="flex jusify-beetwen items-center">
        <div className="flex flex-col text-center items-center w-[140px] h-[140px]">
          <p>Ваш выбор </p>
          <div className="w-[64px] h-[120px] flex items-center">
            <img width="64px" height="120px"  src={getChoice(userChoice)?.image} alt={getChoice(userChoice)?.name} />
          </div>
          <p>{getChoice(userChoice)?.name}</p>
        </div>

        <p>VS.</p>

        <div className="flex flex-col items-center w-[140px] h-[140px]">


          <p>Выбор контракта</p>
          {contractChoice ? (
            <>
              <div className="w-[64px] h-[120px] flex items-center">
                <img width="64px" height="120px"  src={getChoice(contractChoice)?.image} alt={getChoice(contractChoice)?.name} />
              </div>
              <p>{getChoice(contractChoice)?.name}</p>                
            </>
          ) : (
            <div className="flex items-center mt-6">
              <Oval
                height={50}
                width={50}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          )
          }


        </div>


      </div>

      <p className="text-3xl font-semibold mt-8 ">{getStatus(status)}</p>
      {received ? <p className="text-xl font-semibold mt-2 ">Получено: {received} tBNB</p> : null}
      <a className="mt-8 underline underline-offset-1" target="_blank" rel="noreferrer" href={`https://testnet.bscscan.com/tx/${hash}`}>Транзакция на BscScan</a>
    </div>
  )
};

export default Result;