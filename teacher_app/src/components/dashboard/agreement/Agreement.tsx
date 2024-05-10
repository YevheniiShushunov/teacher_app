import React from 'react';
import {agreementText} from './agreement.text';

export const Agreement = () => {
    return(
        <div className="policy-container">
            <div className="policy">{agreementText}</div>
        </div>
    )
}