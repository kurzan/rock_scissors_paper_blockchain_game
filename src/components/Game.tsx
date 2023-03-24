import ChooseGame from "./ChooseGame";
import { useEffect, useState } from 'react';
import { useAccount, useConnect } from 'wagmi';
import Button from "./Button";
import { contract } from "./services/web3config";
import { ethers } from 'ethers';

import { useContractWrite, usePrepareContractWrite } from 'wagmi'

const initialState = {
  choice: "Камень",
  number: 1,
  bet: 0.0001
};

const Game = () => {

  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect()

  const [choiceState, setChoice] = useState(initialState);
  
  const handleChoice = (userChoice: string, choiceNumber: number) => {
    setChoice((prevState) => ({
      ...prevState, choice: userChoice,number: choiceNumber
    }));
  };

  const setBet = (userBet: number) => {
    setChoice((prevState) => ({
      ...prevState, bet: userBet
    }));
  };

  const { config, error } = usePrepareContractWrite({
    address: contract.address as `0x${string}`,
    abi: contract.abi,
    functionName: 'playGame',
    args: [choiceState.number],
    overrides: {
      from: address,
      value: ethers.utils.parseEther(choiceState.bet.toString())
    }
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(config)


  useEffect(() => {
    console.log(data)
    console.log(isLoading)
    console.log(isSuccess)
  }, [data, isLoading, isSuccess])


  return(
    <main className="bg-neutral-50 min-h-min pt-6 pb-12 px-2" >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold">Начнем игру?</h1>
        <p>Выберите ход и сделайте ставку</p>
        <ChooseGame onClick={handleChoice} choiceState={choiceState} />

        <form action="" className="mx-auto flex flex-col justify-items-center">
          <label className="mt-2" htmlFor="bet" >Ставка: </label>
          <input onChange={e => setBet(Number(e.target.value))}  id="bet" className="mx-auto p-2 rounded-lg border-solid border-2 border-gray-600" type="number" placeholder="0.0001" min="0.0001" step="0.0001"  />
          {isConnected ? <Button onClick={write} disabled={isLoading || error} title={isLoading ? "Подтвердите действие" : "Начать игру"} /> : <Button onClick={() => connect({ connector: connectors[2] })} title="Подключить MetaMask" />}
          {error && (
            <div>An error occurred preparing the transaction: {error.message}</div>
          )}
        </form>
      </div>
    </main>
  )
};

export default Game;