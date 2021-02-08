import React from 'react';
import './index.css';

class Button extends React.Component{
    render(){
        return(
            <button key="btn" type="button" id="mybtn" onClick={this.props.handleReset}>Play Again</button>
        );
    }
}

export default Button;