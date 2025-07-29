import React from 'react';

type Props = {
    content : string;
    style : string;
};

const CustomButton: React.FC<Props> = ({ content, style }) => {
    return (
        <div onClick={() => console.log("Click")} className={style}>
            {content}
        </div>
    );
};

export default CustomButton;