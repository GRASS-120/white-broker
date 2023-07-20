import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_6_1 = () => {
   return (
      <div>
         <Title>Условия тендерного кредита</Title>
         <UnorderedList>
            <ListItem>Сумма: до 150 000 000 ₽</ListItem>
            <ListItem>Срок: до 5 лет</ListItem>
            <ListItem>Процентная ставка: 4%-27% в месяц</ListItem>
         </UnorderedList>
         <Title>Условия тендерного займа</Title>
         <UnorderedList>
            <ListItem>Сумма: до 100 000 000 ₽</ListItem>
            <ListItem>Срок: до 3 лет</ListItem>
            <ListItem>Процентная ставка: 4%-27% в месяц</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_6_1;
