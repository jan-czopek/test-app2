import { Stack } from '@mui/material';
import ReqButton from './ReqButton';

const ReqButtons = ({ reqTypes, selectedReqType, setReqType }) => {
  return (
    <Stack spacing={2} direction="row">
      {reqTypes.map(reqType => (
        <ReqButton key={reqType} reqType={reqType} selectedReqType={selectedReqType} setReqType={setReqType} />
      ))}
    </Stack>
  )
}

export default ReqButtons