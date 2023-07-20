import ListItem from '../../../../ui/ListItem';
import TextBlock from '../../../../ui/TextBlock';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_2_1 = () => {
   return (
      <div>
         <Title>Условия</Title>
         <UnorderedList>
            <ListItem>
               Сумма: от 1 000 000 до 500 000 000 ₽, в зависимости от оборота
               компании. Одобрение суммы от 100% от месячного оборота
            </ListItem>
            <ListItem>
               Срок: до 60 месяцев, это в 8-10 раз больше, чем у других
               кредитных организаций
            </ListItem>
            <ListItem>Процентная ставка: 5.5% годовых</ListItem>
            <ListItem>
               Ожидание предварительного решения : всего 15 минут после
               оформления заявки на сайте — Вам не придется долго переживать
            </ListItem>
         </UnorderedList>
         <Title>Цель продукта</Title>
         <UnorderedList>
            <ListItem>Участие в тендерах</ListItem>
            <ListItem>Исполнение контрактов</ListItem>
            <ListItem>
               Рефинансирование оборотных кредитов других банков
            </ListItem>
            <ListItem>Оплата текущих расходов</ListItem>
            <ListItem>Запуск нового проекта</ListItem>
            <ListItem>
               Приобретение оборудования, недвижимости или иных основных средств
            </ListItem>
         </UnorderedList>
         <Title>Форма выдачи</Title>
         <UnorderedList>
            <ListItem>Возобновляемая кредитная линия</ListItem>
            <ListItem>Невозобновляемая кредитная линия</ListItem>
            <ListItem>Кредит с ежемесячным погашением</ListItem>
         </UnorderedList>
         <TextBlock>
            Прочие условия: сумма кредита не ограничена и зависит от финансового
            состояния заемщика и стоимости предмета залога. Для индивидуальных
            предпринимателей с суммой кредита до 15 млн не требуется
            поручительство
         </TextBlock>
      </div>
   );
};

export default smallCreditTab_2_1;
