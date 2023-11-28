import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { toast } from '@/components/ui/use-toast';
type Props = {};

const HomePage = (props: Props) => {
  const handleClick = () => {
    toast({
      title: 'Cập nhật thành công',
    });
  };
  return (
    <div>
      <div>
        <ModeToggle />
        <Button onClick={handleClick}>Click me</Button>
      </div>
    </div>
  );
};

export default HomePage;
