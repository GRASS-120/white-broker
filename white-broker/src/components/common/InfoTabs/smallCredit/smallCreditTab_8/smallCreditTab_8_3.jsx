import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_8_3 = () => {
   return (
      <div>
         <Title>Необходимые документы</Title>
         <UnorderedList>
            <ListItem>Заявка с указанием желаемой суммы кредита</ListItem>
            <ListItem>
               Баланс и отчет о финансовых результатах форма 1,2 за( годовой и
               по квартально текущего года)
            </ListItem>
            <ListItem>
               Для ИП Выписка с расчетного счета за последние 12 месяцев
            </ListItem>
            <ListItem>
               Документы - основания возникновения права собственноси
            </ListItem>
            <ListItem>Правоустанавливающие документы</ListItem>
            <ListItem>Паспорт</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_8_3;
