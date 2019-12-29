import React from "react";
import { Button, useMutation } from "react-admin";

const ApproveButton = ({ record }) => {
  const [approve, { loading }] = useMutation({
    type: "update",
    resource: "businesses",
    payload: { id: record && record.id, data: { approved: true } }
  });

  const [disApprove, { disApprovedloading }] = useMutation({
    type: "update",
    resource: "businesses",
    payload: { id: record && record.id, data: { approved: false } }
  });

  if (!record) {
    return "";
  }

  return record.approved === "approved" ? (
    <Button
      label="Disapprove"
      onClick={disApprove}
      disabled={disApprovedloading}
    />
  ) : (
    <Button label="Approve" onClick={approve} disabled={loading} />
  );
};
export default ApproveButton;
