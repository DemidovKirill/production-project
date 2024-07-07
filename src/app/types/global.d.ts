declare module '*.scss' {
  interface IClassName {
    [className: string]: string
  }
  
  const classNames: IClassName;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.svg?inline' {
  const content: unknown;
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare const __IS_DEV__: boolean