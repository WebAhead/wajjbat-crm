import React from 'react';
import { Button, useMutation } from 'react-admin';

const ApproveButton = ({ record }) => {

    const [approve, { loading }] = useMutation({
        type: 'update',
        resource: 'businesses',
        payload: { id: record && record.id, data: { status: 'approved', statusChange: true } },
    });

    if (!record) {
        return '';
    }

    return <Button label="Approve" onClick={approve} disabled={loading} />
};

export default ApproveButton;
