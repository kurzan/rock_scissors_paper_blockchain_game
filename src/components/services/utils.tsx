import rockImage from '../../images/rock.png';
import papperImage from '../../images/papper.png';
import scirImage from '../../images/sciss.png';


export const getStatus = (stausNum: number | undefined) => {
  switch (stausNum) {
    case 0:
      return "Вы выиграли 🤑"
    
    case 1:
      return "Вы проиграли 💩"

    case 2:
      return "Ничья 😐"  

    default:
      return "Ожидание хода ✌️"
  }
};


export const getChoice = (choiceNumber: number | undefined) => {
  switch (choiceNumber) {
    case 1:
      return {
        name: "Камень",
        image: rockImage 
      } 
  
    case 2:
      return {
        name: "Ножницы",
        image: scirImage  
      } 

    case 3:
      return {
        name: "Бумага",
        image: papperImage  
      } 
    }

};