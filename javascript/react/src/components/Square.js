import { Component } from 'react';

class Square extends Component {
    render = () => (
        <button className="square" onClick={this.props.onClick}>
            {this.props.value}
        </button>
    );
}

export default Square;
