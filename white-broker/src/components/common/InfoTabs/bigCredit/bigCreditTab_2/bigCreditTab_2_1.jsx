import ListItem from '../../../../ui/ListItem';
import UnorderedList from '../../../../ui/UnorderedList';

const bigCreditTab_2_1 = () => {
   return (
      <div>
         <TextBlock>
            Сумма банковская гарантии: от 50 000 000 до 3 000 000 000 ₽<br></br>
            Срок банковской гарантии: до 60 месяцев
            <br></br>
            Процентная ставка: от 2% годовых
            <br></br>
            Прочие условия:
         </TextBlock>
         <UnorderedList>
            <ListItem>
               Выдаем рамках 44ФЗ, 223ФЗ, 615ПП и коммерческие сделки
            </ListItem>
            <ListItem>Без залога</ListItem>
         </UnorderedList>
      </div>
   );
};

export default bigCreditTab_2_1;
