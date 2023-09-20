import { Button } from '@mui/material'

const ReqButton = ({ reqType, selectedReqType, setReqType }) => {
  return (
    <Button
      variant={reqType === selectedReqType ? "contained" : "outlined"}
      onClick={() => setReqType(reqType)}
    >{reqType}</Button>
  )
}

export default ReqButton