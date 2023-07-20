import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_4_2 = () => {
   return (
      <div>
         <Title>Требования</Title>
         <UnorderedList>
            <ListItem>ИП и Юридическое лицо</ListItem>
            <ListItem>
               Возраст собственника ИП должен быть от 21 года до 70 лет
            </ListItem>
            <ListItem>
               Кредитная история положительная(в т.ч без открытых просрочек),
               если нет, то только под залог недвижимости, либо залог 3-го лица
            </ListItem>
            <ListItem>Срок компании от 6 мес(Обороты по счетам)</ListItem>
            <ListItem>Ежемесячная выручка - не менее 100 000 рублей</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_4_2;
