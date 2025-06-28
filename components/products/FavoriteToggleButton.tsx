import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Product } from '@prisma/client';

function FavoriteToggleButton({productId} : {productId: string}) {
  return <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
    <FaHeart />
  </Button>;
}

export default FavoriteToggleButton;
