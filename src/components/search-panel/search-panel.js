import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})   // updating local state
        this.props.onUpdateSearch(term) // function of App
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Find employee"
                value={this.state.term} // this is called Controlled Component. This is the RIGHT way.
                onChange={this.onUpdateSearch}
            />
        )
    }
}

export default SearchPanel;