


export const getStatus = (stausNum: number) => {
  switch (stausNum) {
    case 0:
      return "Победа"
    
    case 1:
      return "Проигрыш"

    case 2:
      return "Ничья"  

    default:
      return "Что-то пошло не так"
  }
};
