import React from 'react';
import LoopIcon from '@material-ui/icons/Loop';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const StatusField = ({ record = {}, source }) => {
    if (record.approved === 'pending') {
        return <LoopIcon />
    }

    if (record.approved === 'approved') {
        return <CheckIcon />
    }

    if (record.approved === 'disapproved') {
        return <ClearIcon />
    }
}

export default StatusField;

