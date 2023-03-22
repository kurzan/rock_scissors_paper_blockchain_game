import rockImage from '../images/rock.png';
import papperImage from '../images/papper.png';
import scirImage from '../images/sciss.png';
import { FC, useEffect, useState } from 'react';

const choices = [
  {
    name: "Камень",
    number: 0,
    image: rockImage
  },
  {
    name: "Ножницы",
    number: 1,
    image: scirImage
  },
  {
    name: "Бумага",
    number: 2,
    image: papperImage
  }
];


type TChooseGame = {
  onClick: any,
  choiceState: {
    choiceNumber: number,
    bet: number
  }
};

const ChooseGame: FC<TChooseGame> = ({onClick, choiceState}) => {


  return(
    <div className='flex justify-center gap-x-8 mt-8'>
      {choices.map(choice => (
        <div key={choice.number} onClick={() => onClick(choice.number)} className={
          choiceState.choiceNumber === choice.number ? "flex flex-col cursor-pointer border-dashed border-2 border-indigo-600" : "flex flex-col cursor-pointer hover:translate-y-2"
          }>
          <img src={choice.image} alt={choice.name}/>
          <p>{choice.name}</p>
        </div>
      ))}
    </div>
  )
};

export default ChooseGame;