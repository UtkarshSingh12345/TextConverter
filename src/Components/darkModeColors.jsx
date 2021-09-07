import React from 'react'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { IconButton } from "@material-ui/core"

export default function DarkModeColors(props) {
        const Object1 = {
        color:props.color,
        fontSize:'30px'
        } 
    return (<IconButton > <AccessAlarmIcon style= {Object1}/></IconButton>)
}
