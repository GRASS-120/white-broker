export const sumToString = (sum) => {
   const strValue = String(sum);
   let newSum = '';

   if (strValue.length == 6) {
      // 500.000 - 999.999
      newSum = strValue.slice(0, 3) + ' ' + strValue.slice(3, 6) + ' ₽';
   } else if (strValue.length == 7) {
      // 1.000.000 - 9.999.999
      newSum =
         strValue[0] +
         ' ' +
         strValue.slice(1, 4) +
         ' ' +
         strValue.slice(4, 7) +
         ' ₽';
   } else if (strValue.length == 8) {
      // 10.000.000 - 50.000.000
      newSum =
         strValue.slice(0, 2) +
         ' ' +
         strValue.slice(2, 5) +
         ' ' +
         strValue.slice(5, 8) +
         ' ₽';
   }

   return newSum;
};

export const monthToString = (month) => {
   const strValue = String(month);
   let newMonth = '';
   let text = 'месяцев';
   console.log(month);
   if (strValue.length == 1) {
      // 1-9 месяцев
      if (month == 1) {
         text = 'месяц';
      } else if (month > 1 && month <= 4) {
         text = 'месяца';
      }

      newMonth = strValue + ' ' + text;
   } else if (strValue.length == 2) {
      newMonth = strValue + ' ' + text;
   }

   return newMonth;
};
