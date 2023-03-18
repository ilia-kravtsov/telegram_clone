import React from 'react';
import s from './App.module.css';
import {IconButton, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function App() {
    return (
        <div className={s.App}>
            <div className={s.container}>
                <div className={s.displayMain}>
                    <div className={s.companion}>

                    </div>
                    <div className={s.display}>

                    </div>
                    <div className={s.btnInp}>
                        <TextField variant={'outlined'}
                                   label={'Enter your message'}
                                   sx={{m: '10px'}}
                        />
                        <IconButton color={'primary'}><SendIcon/></IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
