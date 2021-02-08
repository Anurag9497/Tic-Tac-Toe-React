import React from 'react';
import './index.css';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div  key="messegeBox" id="messege">{this.props.messege}</div>
                <div key="playerBox" className="footer">Player {this.props.turn}'s turn</div>
            </>
        );
    }
}

export default Footer;