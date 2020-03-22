import React from 'react';
import { Button, useMutation } from 'react-admin';

const DisapproveButton = ({ record }) => {

    const [disApprove, { disApprovedloading }] = useMutation({
        type: 'update',
        resource: 'businesses',
        payload: { id: record && record.id, data: { status: 'disapproved', statusChange: true } },
    });

    if (!record) {
        return '';
    }

    return (
        <Button
            label="Disapprove"
            onClick={disApprove}
            disabled={disApprovedloading}
        />
    )

};
export default DisapproveButton;
