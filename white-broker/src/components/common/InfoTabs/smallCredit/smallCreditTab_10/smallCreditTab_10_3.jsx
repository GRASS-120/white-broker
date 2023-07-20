import ListItem from '../../../../ui/ListItem';
import OrderedList from '../../../../ui/OrderedList';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_10_3 = () => {
   return (
      <div>
         <Title>Необходые документы</Title>
         <UnorderedList>
            <ListItem>Заявка с указанием желаемой суммы кредита</ListItem>
            <ListItem>
               Баланс и отчет о финансовых результатах форма 1,2 за(годовой и по
               квартально текущего года)
            </ListItem>
            <ListItem>
               Для ИП Выписка с расчетного счета за последние 12 месяцев
            </ListItem>
            <ListItem>
               Документы - основания возникновения права собственноси
            </ListItem>
            <ListItem>Правоустанавливающие документы</ListItem>
            <ListItem>Паспорт</ListItem>
         </UnorderedList>
         <Title>Необходые документы от нашего партнера</Title>
         <OrderedList>
            <ListItem>Для заявки:</ListItem>
            <UnorderedList>
               <ListItem>ЕГРН</ListItem>
               <ListItem>
                  Документ – основание (ДКП, ДДУ, Дарение, наследство и тд)
               </ListItem>
               <ListItem>
                  Технический паспорт (если объект сложнее квартиры)
               </ListItem>
               <ListItem>Фото объекта внутри и снаружи</ListItem>
               <ListItem>Информация о заёмщике (ИНН)</ListItem>
            </UnorderedList>
            <ListItem>Для итогового рассмотрения:</ListItem>
            <OrderedList>
               <ListItem>ООО</ListItem>
               <UnorderedList>
                  <ListItem>
                     Анкета-заявка от директора(ей), учредителя(ей),
                     залогодателя(ей)
                  </ListItem>
                  <ListItem>Анкета на юр.лицо</ListItem>
                  <ListItem>Карточка предприятия</ListItem>
                  <ListItem>Устав</ListItem>
                  <ListItem>Протокол/Приказ о назначении директора</ListItem>
                  <ListItem>ИНН, ОГРН</ListItem>
                  <ListItem>Паспорт директора(ов)</ListItem>
                  <ListItem>Паспорта учредителя(ей)</ListItem>
                  <ListItem>Паспорт залогодателя(ей)</ListItem>
                  <ListItem>
                     Выписка с р/с за год (выгрузка из онлайн-банка в PDF)
                  </ListItem>
                  <ListItem>
                     Могут быть запрошены дополнительные документы по залогу
                  </ListItem>
               </UnorderedList>
               <ListItem>ИП</ListItem>
               <UnorderedList>
                  <ListItem>Анкета-заявка заёмщика, залогодателя(ей)</ListItem>
                  <ListItem>Паспорт</ListItem>
                  <ListItem>ИНН, ОГРНИП</ListItem>
                  <ListItem>Карточка ИП</ListItem>
                  <ListItem>
                     Выписка с р/с за год (выгрузка из онлайн-банка в PDF)
                  </ListItem>
                  <ListItem>Декларация по налогу на прибыль</ListItem>
                  <ListItem>
                     Могут быть запрошены дополнительные документы по залогу
                  </ListItem>
               </UnorderedList>
               <ListItem>Самозанятый</ListItem>
               <UnorderedList>
                  <ListItem>Анкета-заявка заёмщика, залогодателя(ей)</ListItem>
                  <ListItem>Паспорт</ListItem>
                  <ListItem>ИНН</ListItem>
                  <ListItem>Реквизиты</ListItem>
                  <ListItem>
                     Выписка с р/с за год (выгрузка из онлайн-банка в PDF)
                  </ListItem>
                  <ListItem>
                     Справка о постановке на учет самозанятого (форма КНД
                     1122035 заказывается в приложении мой налог)
                  </ListItem>
                  <ListItem>
                     Справка о полученных доходах и уплаченных налогах форма
                     (КНД 1122036 заказывается в приложении мой налог)
                  </ListItem>
                  <ListItem>
                     Хотя бы 1 чек об оплате проф. Налога самозанятым из онлайн
                     банка
                  </ListItem>
               </UnorderedList>
            </OrderedList>
         </OrderedList>
      </div>
   );
};

export default smallCreditTab_10_3;
