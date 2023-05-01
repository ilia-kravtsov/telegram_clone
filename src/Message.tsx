import React, {FC, useEffect, useState} from 'react';
import s from "./App.module.css";
import {MessageType} from "./App";
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';

type MessageMeType = {
    message: MessageType
    containerStyle: string
    messageStyle: string
    funcContainer: string
    angleStyle: string
    imgSrc: string
    alt: string
    id: string
    deleteMessage: (id: string) => void
}

export const Message: FC<MessageMeType> = ({message,
                                               containerStyle,
                                               messageStyle,
                                               funcContainer,
                                               angleStyle,
                                               imgSrc,
                                               alt,
                                               deleteMessage,
                                               id
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

    const deleteMessageCB = () => deleteMessage(id)

    if (alt === "Mr. Smith") {
        return <li className={containerStyle}>
            <div className={messageStyle}>
                <div>{message.message}</div>
                <div className={funcContainer}>
                    <IconButton onClick={deleteMessageCB}>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                    {stringTime}
                </div>
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
                <div className={funcContainer}>
                    <IconButton onClick={deleteMessageCB}>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                    {stringTime}
                </div>
            </div>
        </li>
    }
};

