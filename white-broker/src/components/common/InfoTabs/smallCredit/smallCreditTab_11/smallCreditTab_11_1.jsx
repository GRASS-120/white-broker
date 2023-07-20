import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_11_1 = () => {
   return (
      <div>
         <Title>Условия</Title>
         <UnorderedList>
            <ListItem>Сумма: от 500 000 до 30 000 000 ₽</ListItem>
            <ListItem>Срок: до 7 лет</ListItem>
            <ListItem>Процентная ставка: 4%-27% годовых</ListItem>
         </UnorderedList>
         <Title>Прочие условия</Title>
         <UnorderedList>
            <ListItem></ListItem>
            <ListItem>Одобрение в короткие сроки за 1 день</ListItem>
            <ListItem>Сумма кредита до 100% от стоимости авто</ListItem>
            <ListItem>ПТС остается у вас</ListItem>
            <ListItem>Без постановки на стоянку</ListItem>
            <ListItem>Без обязательного страхования КАСКО</ListItem>
            <ListItem>Без справок о доходах</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_11_1;
