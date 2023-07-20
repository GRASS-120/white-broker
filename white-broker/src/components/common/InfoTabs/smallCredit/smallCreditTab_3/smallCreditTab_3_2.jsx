import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_3_2 = () => {
   return (
      <div>
         <Title>Требования</Title>
         <UnorderedList>
            <ListItem>Гражданство РФ для ИП, компания резидент;</ListItem>
            <ListItem>Возраст собственника ИП от 21 года до 70 лет;</ListItem>
            <ListItem>
               Кредитная история положительная (в т.ч без открытых просрочек),
               если нет, то только под залог недвижимости, либо залог 3-го лица;
            </ListItem>
            <ListItem>Ежемесячная выручка - не менее 100 000 рублей.</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_3_2;
