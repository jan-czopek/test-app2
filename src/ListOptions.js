import { Stack } from '@mui/material';
import Item from './Item';

const ListOptions = ({ items, handleItemClick }) => {
  return (
    <Stack spacing={2} direction="row">
      {items.map(item => (
        <Item key={item.id} item={item} handleItemClick={handleItemClick} />
      ))}
    </Stack>
  )
}

export default ListOptions