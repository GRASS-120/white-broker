import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_8_2 = () => {
   return (
      <div>
         <Title>Требования</Title>
         <UnorderedList>
            <ListItem>Юридический статус</ListItem>
            <ListItem>ИП и Юридическое лицо</ListItem>
            <ListItem>
               Возраст собственника ИП должен быть от 21 года до 70 лет
            </ListItem>
            <ListItem>По компании нет открытых просрочек</ListItem>
            <ListItem>Срок компании от 6 мес(Обороты по счетам)</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_8_2;
