import ChooseGame from "./ChooseGame";
import { useEffect, useState } from 'react';

const Game = () => {

  const [choiceState, setChoice] = useState({
    choiceNumber: 0,
    bet: 0
  });
  
  const handleChoice = (choiceNumber: any) => {
    setChoice((prevState) => ({
      ...prevState, choiceNumber: choiceNumber
    }));
  };


  return(
    <main className="bg-neutral-50 min-h-min pt-6" >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-semibold">Начнем игру?</h1>
        <p>Выберите ход и сделайте ставку</p>
        <ChooseGame onClick={handleChoice} choiceState={choiceState} />
        <h1 className="text-3xl font-semibold">Ваш выбор: </h1>
      </div>
    </main>
  )
};

export default Game;