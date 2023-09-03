import React from "react";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../assets/images/cloud.png";
import { ThisDayItems } from "./ThisDayItems";


export interface Item {
  icon_id: any;
  name: string;
  value: string;
}

const ThisDayInfo = () => {
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

  return (
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItems item={item} key={item.icon_id} /> 
        ))}
      </div>
      <img className={s.cloud_img} src={cloud} alt="cloud" />
    </div>
  );
};

export default ThisDayInfo;
