// Counter.js
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const btnClassNames =
    'w-[30px] h-[30px] md:w-[14px] md:h-[14px] smd:w-[22px] smd:h-[22px] p-4 min-w-0 rounded-full border-green hover:text-disabled bg-[#DEE6EE]';

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center gap-2">
      <Button size="sm" variant="flat" className={btnClassNames} onClick={handleDecrement}>
        -
      </Button>
      <span className="text-[14px] text-disabled font-montserrat text-green text-xl font-bold">{count}</span>
      <Button size="sm" variant="flat" className={btnClassNames} onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default Counter;
