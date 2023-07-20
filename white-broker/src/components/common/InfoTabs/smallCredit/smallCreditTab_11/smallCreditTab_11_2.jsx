import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_11_2 = () => {
   return (
      <div>
         <Title>Требование к заёмщику</Title>
         <UnorderedList>
            <ListItem>ИП и Юридическое лицо</ListItem>
            <ListItem>
               Возраст собственника ИП должен быть от 21 года до 70 лет
            </ListItem>
            <ListItem>Срок компании от 3 месяцев (Обороты по счетам)</ListItem>
            <ListItem>Гражданство РФ</ListItem>
            <ListItem>Постоянная регистрация на территории РФ</ListItem>
         </UnorderedList>
         <Title>Требование к объекту</Title>
         <UnorderedList>
            <ListItem>Автомобиль в исправном состоянии</ListItem>
            <ListItem>Не старше 7 лет</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_11_2;
