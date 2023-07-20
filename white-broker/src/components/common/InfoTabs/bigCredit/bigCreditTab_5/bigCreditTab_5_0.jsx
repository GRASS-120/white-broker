import ListItem from '../../../../ui/ListItem';
import OrderedList from '../../../../ui/OrderedList';
import TextBlock from '../../../../ui/TextBlock';
import Title from '../../../../ui/Title';

const bigCreditTab_5_0 = () => {
   return (
      <div>
         <TextBlock>
            Облигация – это эмиссионная ценная бумага, закрепляющая право ее
            владельца на получение от эмитента облигации ее номинальной
            стоимости и дохода в предусмотренные сроки. Фактически это
            соглашение, по которому одна сторона обязуется выплатить через
            определенное время другой стороне занятую у нее сумму, а также
            выплачивать проценты по ней в качестве вознаграждения в течение
            всего срока обращения облигаций.
         </TextBlock>
         <TextBlock>
            Облигационный займ – это форма кредитования, для выдачи которой
            заемщик использует эмитированные облигации. Продавая облигации,
            компания занимает средства у покупателя, которые обязуется вернуть в
            установленное время. Таким образом, облигация – это долговая
            расписка. Условия, сроки и размер выплат, сроки погашения известны
            еще при покупке.
         </TextBlock>
         <Title>Отличие облигационных займов от кредита:</Title>
         <OrderedList>
            <ListItem>Отсутствие залога.</ListItem>
            <ListItem>
               Срок до погашения облигаций может существенно превышать сроки
               кредитов.
            </ListItem>
            <ListItem>
               Процентная ставка устанавливается самим предприятием (эмитентом).
            </ListItem>
            <ListItem>Низкая зависимость от кредитора.</ListItem>
            <ListItem>
               Возможен выпуск облигаций на небольшие суммы по закрытой
               подписке.
            </ListItem>
            <ListItem>
               Выпуск облигаций даже на большую сумму не повышает риск потери
               контроля над предприятием, так как в случае облигационного займа,
               инвесторы не имеют права вмешиваться в управление предприятием.
            </ListItem>
         </OrderedList>
      </div>
   );
};

export default bigCreditTab_5_0;
