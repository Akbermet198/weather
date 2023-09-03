import React from "react";
import s from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
interface Props {}
export const ThisDay = (props: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.topBlockWrapper}>
          <div className={s.this_temp}>25&deg;
          </div>
          <div className={s.this_day_name}>сегодня</div>
        </div>
        <div>
        <GlobalSvgSelector id="sun" />
      </div>
      </div>

    
      <div className={s.bottom_block}>
        <div className={s.this_time}>
          time: <span>21:00</span>
        </div>
        <div className={s.this_city}>
          city: <span>Bishkek</span>
        </div>
      </div>
    </div>
  );
};
