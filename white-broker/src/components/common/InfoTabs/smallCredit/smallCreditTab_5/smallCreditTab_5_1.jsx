import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_5_1 = () => {
   return (
      <div>
         <Title>Условия</Title>
         <UnorderedList>
            <ListItem>Сумма: до 80% от цены контракта</ListItem>
            <ListItem>Срок: Зависит от срока контракта</ListItem>
            <ListItem>Процентная ставка: 4%-27% годовых</ListItem>
            <ListItem>Отсрочка: до 210 дней</ListItem>
         </UnorderedList>
         <Title>Прочие условия</Title>
         <UnorderedList>
            <ListItem>Без залога</ListItem>
            <ListItem>Срок рассмотрения от 3 дней</ListItem>
            <ListItem>Работаем со всеми регионами РФ</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_5_1;
