import ListItem from '../../ui/ListItem';
import OrderedList from '../../ui/OrderedList';
import Title from '../../ui/Title';

const InfoTab_2 = () => {
   return (
      <div>
         <Title>Требования</Title>
         <OrderedList>
            <ListItem>ИП и Юридическое лицо</ListItem>
            <ListItem>Зарегистрирована на территории РФ</ListItem>
            <ListItem>
               Компания включена в Единый реестр субъектов малого и среднего
               предпринимательства в соответствии с 209-ФЗ
            </ListItem>
            <ListItem>Заемщик не находится в процессе банкротства</ListItem>
            <ListItem>Статус компании «Действующая»</ListItem>
            <ListItem>Возраст ИП должен быть от 21 года до 70 лет</ListItem>
            <ListItem>По компании нет открытых просрочек</ListItem>
            <ListItem>Срок компании от 6 мес(Обороты по счетам)</ListItem>
            <ListItem>Ежемесячная выручка - не менее 100 000 рублей</ListItem>
         </OrderedList>
      </div>
   );
};

export default InfoTab_2;
