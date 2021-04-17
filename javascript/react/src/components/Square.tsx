import React from 'react';
import './Square.css';

interface Props {
    value: number | null,
    onClick: () => void,
}

const Square = ({ value, onClick }: Props): React.ReactElement => (
    <button className="square" onClick={onClick}>
        {value}
    </button>
);

export default Square;
