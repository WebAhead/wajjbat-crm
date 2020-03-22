import React from 'react';
import LoopIcon from '@material-ui/icons/Loop';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const StatusField = ({ record = {}, source }) => {
    if (record.status === 'pending') {
        return <LoopIcon />
    }

    if (record.status === 'approved') {
        return <CheckIcon />
    }

    if (record.status === 'disapproved') {
        return <ClearIcon />
    }

    return ''
}

export default StatusField;
