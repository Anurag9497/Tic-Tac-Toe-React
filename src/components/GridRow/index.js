import React from 'react';
import './index.css';
import GridItem from '../GridItem';

class GridRow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div key="gridRowBox" className="grid-row">
                {this.props.row.map((col,colIndex) => {
                    return <GridItem key={colIndex}
                    rowIndex={this.props.rowIndex} 
                    col={col} colIndex={colIndex} 
                    handleClick={this.props.handleClick}/>;
                })}
            </div>
        );
    }
}

export default GridRow;