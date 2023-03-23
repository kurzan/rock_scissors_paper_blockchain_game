import { useState } from "react";


type TUseChoise = {
  choice: string,
  number: number,
  bet: number
}


export const useChoise = (initialState: TUseChoise) => {
  
  const [choiceState, setChoiceState] = useState(initialState);

  const setChoise = (userChoice: string, choiceNumber: number) => {
    setChoiceState((prevState) => ({
      ...prevState, choice: userChoice,number: choiceNumber
    }));
  };

  const setBet = (userBet: number) => {
    setChoiceState((prevState) => ({
      ...prevState, bet: userBet
    }));
  };

  return {setChoise, setBet, choiceState}

};
