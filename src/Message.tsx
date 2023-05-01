import React, {FC, useEffect, useState} from 'react';
import s from "./App.module.css";
import {MessageType} from "./App";

type MessageMeType = {
    message: MessageType
    containerStyle: string
    messageStyle: string
    timeStyle: string
    angleStyle: string
    imgSrc: string
    alt: string
}

export const Message: FC<MessageMeType> = ({message,
                                               containerStyle,
                                               messageStyle,
                                               timeStyle,
                                               angleStyle,
                                               imgSrc,
                                               alt
}) => {

  const [creationTime, setCreationTime] = useState<Date>();

    useEffect(() => {
        const now = new Date(Date.now());
        setCreationTime(now);
    }, []);

    let timeFormat = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
    });

    const stringTime = `${timeFormat.format(creationTime)}`

    if (alt === "Mr. Smith") {
        return <li className={containerStyle}>
            <div className={messageStyle}>
                <div>{message.message}</div>
                <div className={timeStyle}>{stringTime}</div>
            </div>
            <div className={angleStyle}></div>
            <img
                src={imgSrc}
                alt={alt} className={s.ava}
            />
        </li>
    } else {
        return  <li className={containerStyle}>
            <img
                src={imgSrc}
                alt={alt} className={s.ava}
            />
            <div className={angleStyle}></div>
            <div className={messageStyle}>
                <div>{message.message}</div>
                <div className={timeStyle}>{stringTime}</div>
            </div>
        </li>
    }
};

