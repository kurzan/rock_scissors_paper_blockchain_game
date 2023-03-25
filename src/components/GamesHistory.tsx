import { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';
import { contract } from './services/web3config';
import { ethers, BigNumberish } from 'ethers';

import { getStatus, getChoice } from './services/utils';

const games = [
  {
    gameId: 1,
    playerAddress: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848",
    bet: 0.001,
    playerChoice: 1,
    contractChoice: 2,
    receive: 0.002, 
    status: "WIN",
    txhash: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848"
  },
  {
    gameId: 1,
    playerAddress: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848",
    bet: 0.001,
    playerChoice: 1,
    contractChoice: 2,
    receive: 0.002, 
    status: "WIN",
    txhash: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848"
  },
  {
    gameId: 1,
    playerAddress: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848",
    bet: 0.001,
    playerChoice: 1,
    contractChoice: 2,
    receive: 0.002, 
    status: "WIN",
    txhash: "0xfBc68f89B2ec75600f7B07b7Ef3391D9BF24b848"
  }
]

type TGame = {
  bet: any,
  playerChoice: any,
  contractChoice: any,
  status: number,
  received: any
};

const GamesHistory = () => {

  const [games, setGames] = useState<TGame[] | undefined>();

  const { data, isLoading, isError } = useContractRead({
    address: contract.address as `0x${string}`,
    abi: contract.abi,
    functionName: 'getGames()',
    watch: true,
  })

  useEffect(() => {
    setGames(data as TGame[])
    console.log(games)

  }, [games, data])


  return(
    <section>
      
      <div className="container mx-auto text-center pt-10 pb-10">
        <h1 className="text-3xl font-semibold pb-4">Недавние игры</h1>

        <div className="flex flex-col mx-auto">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">#</th>
                      <th scope="col" className="px-6 py-4">Ставка</th>
                      <th scope="col" className="px-6 py-4">Игрок</th>
                      <th scope="col" className="px-6 py-4">Контракт</th>
                      <th scope="col" className="px-6 py-4">Статус</th>
                      <th scope="col" className="px-6 py-4">Выигрыш</th>
                    </tr>
                  </thead>
                  <tbody>
                  {games?.map((game, index) => (
                                    <tr key={index} className="border-b dark:border-neutral-500">
                                      <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                      <td className="whitespace-nowrap px-6 py-4">{Number(ethers.utils.formatEther(game.bet as BigNumberish))} tBNB</td>
                                      <td className="whitespace-nowrap px-6 py-4">{getChoice(game.playerChoice.toNumber())?.name}</td>
                                      <td className="whitespace-nowrap px-6 py-4">{getChoice(game.contractChoice.toNumber())?.name}</td>
                                      <td className="whitespace-nowrap px-6 py-4">{getStatus(game.status)}</td>
                                      <td className="whitespace-nowrap px-6 py-4">{Number(ethers.utils.formatEther(game.received as BigNumberish))} tBNB</td>
                                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
};

export default GamesHistory;