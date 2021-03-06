import React from 'react';

export type ProductParamList = {
    Product: {
        name: string;
    };
    EditProduct: {
        name: string;
        submit?: React.MutableRefObject<() => void>;
    };
};
