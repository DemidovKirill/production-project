import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
  const { children } = props;
  const container = props.container || document.getElementById('app') || document.body;

  return createPortal(children, container);
};
