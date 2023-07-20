import ListItem from '../../../../ui/ListItem';
import OrderedList from '../../../../ui/OrderedList';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_10_3 = () => {
   return (
      <div>
         <Title>Условия</Title>
         <OrderedList>
            <ListItem>Банк:</ListItem>
            <UnorderedList>
               <ListItem>Сумма: от 1 млн до 300 000 000 ₽</ListItem>
               <ListItem>Срок: до 15 лет</ListItem>
               <ListItem>Процентная ставка: от 4%-27% годовых</ListItem>
            </UnorderedList>
            <ListItem>Инвестор:</ListItem>
            <UnorderedList>
               <ListItem>Сумма: от 1 млн до 200 000 000 ₽</ListItem>
               <ListItem>Срок: до 3 лет</ListItem>
               <ListItem>Процентная ставка: от 4%-27% годовых</ListItem>
            </UnorderedList>
            <ListItem>МФО:</ListItem>
            <UnorderedList>
               <ListItem>Сумма: от 1 млн до 200 000 000 ₽</ListItem>
               <ListItem>Срок: до 10 лет</ListItem>
               <ListItem>Процентная ставка: от 4%-27% годовых</ListItem>
            </UnorderedList>
         </OrderedList>
         <Title>Условия</Title>
      </div>
   );
};

export default smallCreditTab_10_3;
