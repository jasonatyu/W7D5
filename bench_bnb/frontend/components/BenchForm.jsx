import React from 'react';

class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { description: "", seating: "", lat: this.props.lat, lng: this.props.lng };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBench(this.state).then(() => this.props.history.push("/"));
    }

    handleChange(type) {
        return (e) => this.setState({ [type] : e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Description:
                    <input type="text" onChange={this.handleChange('description')} value={this.state.description}/>
                </label>
                <label>Seats:
                    <input type="text" onChange={this.handleChange('seating')} value={this.state.seating} />
                </label>
                <label>Latitude:
                    <input type="text" onChange={this.handleChange('lat')} value={this.state.lat} disabled/>
                </label>
                <label>Longitude:
                    <input type="text" onChange={this.handleChange('lng')} value={this.state.lng} disabled/>
                </label>
                <input type="submit" value="Add Bench"/>
            </form>
        );
    }
}

export default BenchForm;