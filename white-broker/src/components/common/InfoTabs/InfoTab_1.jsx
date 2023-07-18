import ListItem from '../../ui/ListItem';
import OrderedList from '../../ui/OrderedList';
import Title from '../../ui/Title';
import UnorderedList from '../../ui/UnorderedList';

const InfoTab_1 = () => {
   return (
      <div>
         <Title>Условия</Title>
         <OrderedList>
            <ListItem>Сумма: до 500 000 000 ₽</ListItem>
            <ListItem>Срок: до 30 лет</ListItem>
            <ListItem>Процентная ставка: от 6.5% годовых</ListItem>
            <ListItem>Цель продукта:</ListItem>
            <UnorderedList>
               <ListItem>Участие в тендерах</ListItem>
               <ListItem>Исполнение контрактов</ListItem>
               <ListItem>
                  Рефинансирование оборотных кредитов других банков
               </ListItem>
               <ListItem>Оплата текущих расходов</ListItem>
               <ListItem>Запуск нового проекта</ListItem>
               <ListItem>
                  Приобретение оборудования, недвижимости или иных основных
                  средств
               </ListItem>
            </UnorderedList>
            <ListItem>Форма выдачи:</ListItem>
            <UnorderedList>
               <ListItem>Возобновляемая кредитная линия</ListItem>
               <ListItem>Невозобновляемая кредитная линия</ListItem>
               <ListItem>Кредит с ежемесячным погашением</ListItem>
            </UnorderedList>
            <ListItem>
               Прочие условия: сумма кредита не ограничена и зависит от
               финансового состояния заемщика и стоимости предмета залога. Для
               индивидуальных предпринимателей с суммой кредита до 15 млн не
               требуется поручительство
            </ListItem>
         </OrderedList>
      </div>
   );
};

export default InfoTab_1;
