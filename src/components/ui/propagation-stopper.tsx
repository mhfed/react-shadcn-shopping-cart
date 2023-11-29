const preventDefaultPropagtion = (
  e: React.MouseEvent<HTMLElement, MouseEvent>
) => {
  e.nativeEvent.stopImmediatePropagation();
  e.nativeEvent.preventDefault();
  e.preventDefault();
  e.stopPropagation();
};

type PropagationStopperProps = React.HTMLAttributes<HTMLDivElement>;

const PropagationStopper = ({
  children,
  onClick,
  ...props
}: PropagationStopperProps) => {
  return (
    <div
      {...props}
      onClick={(e) => {
        preventDefaultPropagtion(e);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </div>
  );
};

export { PropagationStopper };
