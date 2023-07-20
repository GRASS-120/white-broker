import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_6_2 = () => {
   return (
      <div>
         <Title>Требования</Title>
         <UnorderedList>
            <ListItem>Срок существования ООО/ИП от 9 месяцев</ListItem>
            <ListItem>Опыт исполнения от 2 контрактов</ListItem>
            <ListItem>Отсутствие блокировок по счетам</ListItem>
            <ListItem>
               Положительная кредитная история ООО/ИП, учредителей и
               генерального директора
            </ListItem>
            <ListItem>
               Возраст Собственника ИП должен быть от 21 года до 70 лет
            </ListItem>
            <ListItem>Срок компании от 3 мес(Обороты по счетам)</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_6_2;
