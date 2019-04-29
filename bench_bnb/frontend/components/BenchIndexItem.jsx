import React from 'react';

const BenchIndexItem = (props) => (
    <li>
        {props.bench.description} {props.bench.lat} {props.bench.lng}
    </li>
)

export default BenchIndexItem;