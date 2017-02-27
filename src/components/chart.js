// import lodash library to perform math functions on data
import _ from 'lodash';

// import React library
import React from 'react';

// import Sparklines charting library to display data
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// using lodash to find average weather data so app can display SparklinesReferenceline 
function average(data){
    return _.round(_.sum(data)/data.length);
}

// Calling Sparklines components passing in props
export default (props) => {

    return (
    <div >
        <Sparklines width={180} height={120} data={props.data}>
            
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
            
        </Sparklines>
        <div> {average(props.data)} {props.units}</div>
    </div>
    );
    
}