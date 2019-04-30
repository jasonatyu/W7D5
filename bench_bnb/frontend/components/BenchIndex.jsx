import React from 'react';
import BenchIndexItem from './BenchIndexItem';

class BenchIndex extends React.Component {

    componentDidMount() {
    }

    render() {
        const benches = this.props.benches.map((bench) => <BenchIndexItem key={bench.id} bench={bench} />)
        return (
            <ul>
                { benches }
            </ul>
        )
    }
}

export default BenchIndex;