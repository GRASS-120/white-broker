import ListItem from '../../../../ui/ListItem';
import OrderedList from '../../../../ui/OrderedList';
import Title from '../../../../ui/Title';
import UnorderedList from '../../../../ui/UnorderedList';

const smallCreditTab_12_2 = () => {
   return (
      <div>
         <Title>Требования</Title>
         <OrderedList>
            <ListItem>Программа 1764</ListItem>
            <UnorderedList>
               <ListItem>Резидент РФ</ListItem>
               <ListItem>Юридическое лицо</ListItem>
               <ListItem>
                  Отсутствие возбужденного производства по делу о банкротстве
               </ListItem>
               <ListItem>
                  Заемщик не имеет действующие кредитные договоры (соглашения) в
                  рамках Правил, заключенные после 1 мая 2021 г., в иных
                  уполномоченных банках
               </ListItem>
            </UnorderedList>
            <ListItem>Программа кредитования инновационных компаний</ListItem>
            <UnorderedList>
               <ListItem>
                  Юридическое лицо, присутствующее в Едином реестре субъектов
                  МСП
               </ListItem>
               <ListItem>Осуществление деятельности не менее 3-х лет</ListItem>
               <ListItem>Годовой объем выручки — более 100 млн руб</ListItem>
               <ListItem>
                  Темп роста (CAGR) выручки за 3 предыдущие года — не менее 12%
               </ListItem>
               <ListItem>Ведение деятельности в приоритетных отраслях</ListItem>
            </UnorderedList>
            <ListItem>Программа минсельхозразвития</ListItem>
            <UnorderedList>
               <ListItem>
                  С/х товаропроизводители, а также организации или ИП,
                  осуществляющие производство и переработку с/х продукции
               </ListItem>
               <ListItem>
                  Отсутствие просроченной задолженности по налогам, сборам и
                  иным платежам в бюджет
               </ListItem>
               <ListItem>Не находится в процессе банкротства</ListItem>
               <ListItem>Регистрация бизнеса на территории РФ</ListItem>
               <ListItem>Налоговый резидент РФ</ListItem>
               <ListItem>
                  Не находится в процессе ликвидации, реорганизации
               </ListItem>
            </UnorderedList>
            <ListItem>
               Программа стимулирования кредитования субъектов МСП
            </ListItem>
            <UnorderedList>
               <ListItem>
                  Сведения о заемщике внесены в Единый Реестр субъектов МСП
               </ListItem>
               <ListItem>
                  Заемщик не относится к субъектам МСП, указанным в части 3 и 4*
                  статьи 14 Федерального закона от 24.07.2007 № 209-ФЗ
               </ListItem>
               <ListItem>
                  Заемщик не связан прямо или через учредителей с долей участи в
                  уставном капитале более 25% с иными юридическими лицами, не
                  относящимися к категории субъектов МСП
               </ListItem>
               <ListItem>
                  Отсутствие возбужденного производства по делу о банкротстве
               </ListItem>
               <ListItem>
                  Отсутствие нерезидентов среди лиц, входящих в цепочку
                  собственников
               </ListItem>
            </UnorderedList>
            <ListItem>
               Программа стимулирования кредитования субъектов МСП и Программа
               1764
            </ListItem>
            <UnorderedList>
               <ListItem>
                  Субъект МСП на дату заключения соответствующего кредитного
                  договора (соглашения) является резидентом РФ, субъектом малого
                  или среднего предпринимательства
               </ListItem>
               <ListItem>
                  Сведения о Субъекте МСП внесены в единый реестр субъектов МСП
               </ListItem>
               <ListItem>
                  Не осуществляет подакцизную деятельность и добычу/реализацию
                  полезных ископаемых
               </ListItem>
               <ListItem>
                  Не входит в группу с компаниями крупного бизнеса
               </ListItem>
               <ListItem>Статус налогового резидента РФ</ListItem>
               <ListItem>
                  Отсутствие возбужденного производства по делу о банкротстве
               </ListItem>
            </UnorderedList>
         </OrderedList>
      </div>
   );
};

export default smallCreditTab_12_2;
