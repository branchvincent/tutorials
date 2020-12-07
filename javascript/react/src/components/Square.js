import { Component } from 'react';
import './Square.css';

class Square extends Component {
    render = () => (
        <button className="square" onClick={this.props.onClick}>
            {this.props.value}
        </button>
    );
}

export default Square;
