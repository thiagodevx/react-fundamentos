import React from 'react';
import {addPropsToChildren} from '../utils/utils';

export default props =>
    <div>
        {addPropsToChildren(props)}
    </div>