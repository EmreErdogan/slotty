import { useContext, useEffect } from 'react';

import { SlotContext } from './SlotContext';

export type FillProps = {
  slot: string;
};

export const Fill: React.FC<FillProps> = ({ slot, children }) => {
  const { addFiller, removeFiller } = useContext(SlotContext);

  useEffect(() => {
    addFiller(slot, children);

    return () => {
      removeFiller(slot);
    };
  }, [slot, children, addFiller, removeFiller]);

  return null;
};

export default Fill;
