import * as React from "react";

export class SearchBar extends React.Component {

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    };

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Поиск..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                    className = "searchBar"
                />
            </form>
        );
    }
}