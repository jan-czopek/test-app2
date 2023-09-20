import { Button } from '@mui/material'

const Item = ({ item, handleItemClick }) => {
  return (
    <Button
      variant={item.selected ? "contained" : "outlined"}
      onClick={() => handleItemClick(item.id)}
    >{item.name}</Button>
  )
}

export default Item