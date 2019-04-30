import React from 'react';
import BenchMap from './BenchMap';
import BenchIndex from './BenchIndex';
import FilterForm from './FilterForm';

const Search = ({ benches, updateFilter }) => (
    <div>
        <BenchMap benches={benches} updateFilter={updateFilter} />
        <FilterForm updateFilter={updateFilter} />
        <BenchIndex benches={benches} />
    </div>
);

export default Search;