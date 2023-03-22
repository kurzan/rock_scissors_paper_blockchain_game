import ChooseGame from "./ChooseGame";
import { useEffect, useState } from 'react';


import { useBalance } from 'wagmi'

const Game = () => {

  const [choiceState, setChoice] = useState({
    choice: "Камень",
    bet: 0
  });
  
  const handleChoice = (userChoice: any, userBet: any = 0.0001) => {
    setChoice((prevState) => ({
      ...prevState, choice: userChoice, bet: userBet
    }));
  };


  return(
    <main className="bg-neutral-50 min-h-min pt-6 px-2" >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold">Начнем игру?</h1>
        <p>Выберите ход и сделайте ставку</p>
        <ChooseGame onClick={handleChoice} choiceState={choiceState} />
        <h1 className="text-3xl font-semibold">Ваш выбор: {choiceState.choice} </h1>

        <form action="" className="mx-auto flex flex-col justify-items-center ">
          <label className="mt-4" htmlFor="bet" >Ставка: </label>
          <input id="bet" className="mx-auto p-2 rounded-lg border-solid border-2 border-gray-600" type="number" placeholder="0.0001" min="0.0001" step="0.0001"  />
          <button className="mx-auto py-2 px-4 mt-4 rounded-lg bg-indigo-600 text-white">Начать игру</button>
        </form>


      </div>
    </main>
  )
};

export default Game;