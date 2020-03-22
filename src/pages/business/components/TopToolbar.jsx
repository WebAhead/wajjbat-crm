import React from 'react';
import { TopToolbar } from 'react-admin';
import Buttons from './buttons';

const { ApproveButton, DisapproveButton } = Buttons

const Toolbar = (props) => {

    if (!props || !props.data) {
        return ''
    }
    console.log(props)

    const { data: { status } } = props

    return (
        <TopToolbar {...props}>
            {(status === 'approved' || status === 'pending') && <DisapproveButton record={props.data} />}
            {(status !== 'approved' || status === 'pending') && <ApproveButton record={props.data} />}
        </TopToolbar>
    );
}

export default Toolbar;
