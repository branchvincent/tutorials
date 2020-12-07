import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import './index.css';

ReactDOM.render(
    <StrictMode>
        <Game />
    </StrictMode>,
    document.getElementById('root')
);
