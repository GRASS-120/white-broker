import ListItem from '../../ui/ListItem';
import OrderedList from '../../ui/OrderedList';
import Title from '../../ui/Title';

const InfoTab_3 = () => {
   return (
      <div>
         <Title>Необходимые документы</Title>
         <OrderedList>
            <ListItem>Заявка с указанием желаемой суммы кредита</ListItem>
            <ListItem>
               Баланс и отчет о финансовых результатах форма 1,2 за( годовой и
               по квартально текущего года)
            </ListItem>
            <ListItem>
               Для ИП Выписка с расчетного счета за последние 12 месяцев
            </ListItem>
            <ListItem>Паспорт собственника</ListItem>
         </OrderedList>
      </div>
   );
};

export default InfoTab_3;
