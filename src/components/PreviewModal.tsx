import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { PropagationStopper } from './ui/propagation-stopper';

interface PreviewModal {
  children: React.ReactNode;
  content: React.ReactNode;
}
export const PreviewModal: React.FC<PreviewModal> = ({ children, content }) => {
  return (
    <PropagationStopper>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className='w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle'>
          <div className='flex items-center space-x-2'>{content}</div>
        </DialogContent>
      </Dialog>
    </PropagationStopper>
  );
};
