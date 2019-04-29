import React from 'react';
import BenchMap from './BenchMap';
import BenchIndex from './BenchIndex';

const Search = ({ benches, fetchBenches }) => (
    <div>
        <BenchMap benches={benches} />
        <BenchIndex benches={benches} fetchBenches={fetchBenches} />
    </div>
);

export default Search;