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
    const prevMonthLastDay = new Date(year, month - 1, 0).getDate();
    const calendarDays = [...Array(daysInMonth).keys()].map((day) => day + 1);
    const prevMonthDays = [...Array(firstDayOfWeek).keys()]
        .map((day) => prevMonthLastDay - day)
        .reverse();
    const daysToShow = [...prevMonthDays, ...calendarDays];
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    // 현재 날짜를 가져옵니다.
    const now = new Date();
    // 목표 날짜를 설정합니다.
    const weddingDate = new Date(2023, 9, 22); // JavaScript의 월은 0부터 시작하므로 10월은 9입니다.
    // 두 날짜의 차이를 밀리초 단위로 계산합니다.
    const diff = weddingDate.getTime() - now.getTime();
    // 밀리초를 일 단위로 변환합니다.
    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return (
        <div className={style.outWrapper}>
            <div className={style.monthWrapper}>{"OCTOVER"}</div>
            <div className={style.calendar}>
                {weekDays.map((day) => (
                    <div key={day} className={style.calendarDay}>
                        {day}
                    </div>
                ))}
                {daysToShow.map((day) => (
                    <div
                        key={day}
                        className={day !== 22 ? style.calendarDay : style.dDay}
                    >
                        {day}
                    </div>
                ))}
            </div>
            <div className={style.textWrapper}>
                {"세미 & 동호의 결혼식이 "}
                <span style={{ color: "red" }}>{daysLeft}</span>
                {"일 남았습니다."}
            </div>
        </div>
    );
};

export default InvitationCalenderComponent;
