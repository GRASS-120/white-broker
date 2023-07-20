import ListItem from '../../../../ui/ListItem';
import OrderedList from '../../../../ui/OrderedList';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_8_1 = () => {
   return (
      <div>
         <Title>Как оформить бизнес-ипотеку?</Title>
         <UnorderedList>
            <ListItem>
               Подача заявки: Предварительное решение за 15 минут
            </ListItem>
            <ListItem>Подбор и согласование условий: До 1 дня</ListItem>
            <ListItem>
               Принятие решения: Встреча с представителем и подписание
               документов
            </ListItem>
            <ListItem>Выдача: Получение денежных средств</ListItem>
         </UnorderedList>
         <Title>Какую недвижимость можно купить?</Title>
         <OrderedList>
            <ListItem>Коммерческая:</ListItem>
            <UnorderedList>
               <ListItem>Офисная</ListItem>
               <ListItem>Складская</ListItem>
               <ListItem>Торговая</ListItem>
               <ListItem>Производственная</ListItem>
               <ListItem>Земельные участки</ListItem>
            </UnorderedList>
            <ListItem>Жилая:</ListItem>
            <UnorderedList>
               <ListItem>Квартиры</ListItem>
               <ListItem>Таунхаусы</ListItem>
               <ListItem>Коттеджи</ListItem>
               <ListItem>Земельные участки</ListItem>
            </UnorderedList>
         </OrderedList>
      </div>
   );
};

export default smallCreditTab_8_1;
