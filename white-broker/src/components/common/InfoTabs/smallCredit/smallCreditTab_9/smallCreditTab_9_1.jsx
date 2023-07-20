import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_9_1 = () => {
   return (
      <div>
         <Title>Условия</Title>
         <UnorderedList>
            <ListItem>Сумма: до 15 000 000 ₽</ListItem>
            <ListItem>Срок: до 15 лет</ListItem>
            <ListItem>Процентная ставка: 4%-27% годовых</ListItem>
         </UnorderedList>
         <Title>Прочие условия</Title>
         <UnorderedList>
            <ListItem>Срок рассмотрения 1-2 дня</ListItem>
            <ListItem>Без залога и поручителей</ListItem>
            <ListItem>Без обязательного подтверждения доходов</ListItem>
            <ListItem>Минимальный пакет документов</ListItem>
            <ListItem>Отсрочка платежа</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_9_1;
