import React from "react";
import s from "./Home.module.scss";
import { ThisDay } from "../thisDay/ThisDay";
import ThisDayInfo from "../thisDayInfo/ThisDayInfo";
import { Card } from "@mui/material";
import { Days } from "../days/Days";

interface Props {}
export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />{" "}
    </div>
  );
};
