import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_10_2 = () => {
   return (
      <div>
         <Title>Требования к заёмщику</Title>
         <UnorderedList>
            <ListItem>Юридический статус</ListItem>
            <ListItem>ИП и Юридическое лицо</ListItem>
            <ListItem>
               Возраст собственника ИП должен быть от 21 года до 70 лет
            </ListItem>
            <ListItem>Срок компании от 3 мес(Обороты по счетам)</ListItem>
            <ListItem>Гражданство РФ</ListItem>
            <ListItem>Постоянная регистрация на территории РФ</ListItem>
         </UnorderedList>
         <Title>Требования к объекту недвижимости</Title>
         <UnorderedList>
            <ListItem>
               Должно быть построено или пройти капитальный ремонт и/или
               реконструкцию не ранее 1924г
            </ListItem>
            <ListItem>Не находиться в аварийоном состоянии</ListItem>
            <ListItem>
               Не состоять на учете по постановке на капитальный ремонт, снос
               или реконструкцию с отселением
            </ListItem>
            <ListItem>Объект недвижимости РФ, кроме Кавказа</ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_10_2;
