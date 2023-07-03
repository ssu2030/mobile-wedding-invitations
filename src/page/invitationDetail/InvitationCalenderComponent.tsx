import React from "react";

import style from "style/contents/InvitationCalender.module.scss";

interface CalendarProps {
    year: number;
    month: number;
}

const InvitationCalenderComponent: React.FC<CalendarProps> = ({
    year,
    month,
}) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay();

    // 이전 달의 마지막 날짜를 계산합니다.
    const prevMonthLastDay = new Date(year, month - 1, 0).getDate();

    // 현재 달력의 날짜 배열을 생성합니다.
    const calendarDays = [...Array(daysInMonth).keys()].map((day) => day + 1);

    // 이전 달의 일부 날짜를 추가합니다.
    const prevMonthDays = [...Array(firstDayOfWeek).keys()]
        .map((day) => prevMonthLastDay - day)
        .reverse();
    const daysToShow = [...prevMonthDays, ...calendarDays];

    return (
        <div className={style.calendar}>
            {daysToShow.map((day) => (
                <div key={day} className={style.calendarDay}>
                    {day}
                </div>
            ))}
        </div>
    );
};

export default InvitationCalenderComponent;
