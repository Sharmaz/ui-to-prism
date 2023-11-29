import React from 'react';

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
// eslint-disable-next-line react/jsx-props-no-spreading
const SvgrMock = React.forwardRef((props, ref) => <span ref={ref} {...props} />);

export const ReactComponent = SvgrMock;
export default SvgrMock;
