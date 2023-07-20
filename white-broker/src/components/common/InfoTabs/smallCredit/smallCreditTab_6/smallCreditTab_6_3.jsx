import ListItem from '../../../../ui/ListItem';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_6_3 = () => {
   return (
      <div>
         <Title>Необходые документы</Title>
         <UnorderedList>
            <ListItem>
               Бухгалтерский баланс и отчет о финансовых результатах (ф1, ф2) за
               последний отчетный период и последний завершенный год
            </ListItem>
            <ListItem>Карточка предприятия</ListItem>
            <ListItem>
               Ссылка на контракт, под который требуется финансирование
            </ListItem>
         </UnorderedList>
      </div>
   );
};

export default smallCreditTab_6_3;
