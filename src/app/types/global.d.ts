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

declare module '*.svg' {
  import React from 'react';

  const svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT_TYPE__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
