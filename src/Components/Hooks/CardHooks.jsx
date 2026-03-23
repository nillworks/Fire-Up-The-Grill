import { useContext } from 'react';
import CardItemContext from '../Context/CardItemContext';

const CardHooks = () => {
  return useContext(CardItemContext);
};

export default CardHooks;
