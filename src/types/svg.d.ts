declare module '*.svg' {
  import React from 'react';

  const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default SVG;
}
