import React from 'react';
import './index.css';

class GridItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div key="gridItemBox" className="grid-item" onClick={() => {
                this.props.handleClick(this.props.rowIndex,this.props.colIndex)
                }}>
                {this.props.col}
            </div>
        );
    }
}

export default GridItem;