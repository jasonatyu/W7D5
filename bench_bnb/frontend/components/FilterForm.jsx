import React from 'react';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {minSeating: "", maxSeating: ""};
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type] : e.target.value });
            this.props.updateFilter(type, parseInt(e.target.value));
        };
    }

    render() {
        return (
            <div>
                <label>Min Seating:
                    <input type="text" onChange={this.handleChange('minSeating')} value={this.state.minSeating} />
                </label>
                <label>Max Seating:
                    <input type="text" onChange={this.handleChange('maxSeating')} value={this.state.maxSeating} />
                </label>
            </div>
        )
    }
}

export default FilterForm;