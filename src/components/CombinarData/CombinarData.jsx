export const CombinarData = (cardHorTextIzq, cardHorTextDer) => {
    const combinedData = [];
    const maxLength = Math.max(cardHorTextIzq.length, cardHorTextDer.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (cardHorTextIzq[i]) {
        combinedData.push(cardHorTextIzq[i]);
      }
      if (cardHorTextDer[i]) {
        combinedData.push(cardHorTextDer[i]);
      }
    }
  
    return combinedData;
  };
  