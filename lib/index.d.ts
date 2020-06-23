import React from 'react';
import './index.css';
interface Props {
    show?: boolean;
    imgUrl?: string;
    status?: string;
    msg?: string;
    confirm?: boolean;
    okText?: string;
    cancelText?: string;
    save?: () => void;
    cancel?: () => void;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    btnColor?: string;
    btnBorderRadius?: string;
}
export declare const Feedback: React.FC<Props>;
export {};
//# sourceMappingURL=index.d.ts.map