import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_5_2 = () => {
   return (
      <div>
         <Title>Требования</Title>
         <UnorderedList>
            <ListItem>Срок организации от 6 мес</ListItem>
            <ListItem>Опыт выполнения от 2-х контрактов</ListItem>
            <ListItem>Положительная годовая бух. отчётность (ф1 и ф2)</ListItem>
            <ListItem>
               Кредитная история положительная(в т.ч без открытых просрочек),
               если нет, то только под залог недвижимости, либо залог 3-го лица
            </ListItem>
            <ListItem>Отсутствие блокировки счетов</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_5_2;
