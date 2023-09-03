import React from "react";
import s from "./Popup.module.scss";
import { ThisDayItems } from "../../pages/thisDayInfo/ThisDayItems";
import { Item } from "../../pages/thisDayInfo/ThisDayInfo";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

interface Props {}
const items = [
  {
    icon_id: "temp",
    name: "Температура",
    value: "20° - ощущается как 17°",
  },
  {
    icon_id: "pressure",
    name: "Давление",
    value: "765 мм ртутного столба - нормальное",
  },
  {
    icon_id: "precipitation",
    name: "Осадки",
    value: "Без осадков",
  },
  {
    icon_id: "wind",
    name: "Ветер",
    value: "3 м/с юго-запад - легкий ветер",
  },
];

export const PopUp = ({}: Props) => {
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>20</div>
          <div className={s.name}>wen</div>
          <div className={s.img}><GlobalSvgSelector id='sun'/>
             
        <div className={s.day_time}>
          time: <span>21:00</span>
        </div>
        <div className={s.day_city}>
          city: <span>Bishkek</span>
        </div></div>
        </div>
      
        <div className={s.this_day_info}>
          <div className={s.this_day_info_items}>

            {items.map((item: Item) => (
              <ThisDayItems item={item} key={item.icon_id} />
              
            ))}
            
          </div>
          
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
