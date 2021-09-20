/* eslint-disable react/prop-types */
import { Card, CardHeader } from '@material-ui/core';
import BulkSms from '../../widgets/forms/BulkSms';

const SendBulkSms = ({ rest }) => (
  <Card {...rest}>
    <CardHeader title='Send Bulk Messages' />
    <BulkSms />
  </Card>
);

export default SendBulkSms;
