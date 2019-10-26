import React, { FC } from 'react';

import './Alert.less';

export interface AlertProps {
    /**
   * Set this to change alert kind
   * @default info
   */
    kind: 'info' | 'positive' | 'negative' | 'warning';
}

export const Alert: FC<AlertProps> = ({ children, kind, ...rest }) => {
    return (
        <div className="Alert" {...rest}>
            {children}
        </div>
    );
};
Alert.defaultProps = {
    kind: 'info'
};

export default Alert;
