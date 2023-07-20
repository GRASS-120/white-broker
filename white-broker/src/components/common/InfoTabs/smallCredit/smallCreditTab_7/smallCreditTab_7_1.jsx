import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_7_1 = () => {
   return (
      <div>
         <Title>Условия</Title>
         <UnorderedList>
            <ListItem>Сумма: от 500 000 до 30 000 000 ₽</ListItem>
            <ListItem>Срок: до 2-х лет</ListItem>
            <ListItem>Процентная ставка: 4%-27% годовых</ListItem>
         </UnorderedList>
         <Title>Цель продукта</Title>
         <UnorderedList>
            <ListItem>Кассовый разрыв</ListItem>
            <ListItem>Пополнение оборотных средств</ListItem>
            <ListItem>
               Исполнение контрактов в рамках федеральных законов 44-ФЗ, 223-ФЗ
            </ListItem>
            <ListItem>
               Оплаты срочных платежей при недостатке средств на счёте
            </ListItem>
            <ListItem>Выплаты зарплаты персоналу</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_7_1;
