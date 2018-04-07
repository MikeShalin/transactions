import React, {Component} from 'react';

export class PopUp extends Component{

    render(){
        return(
            <h2>{this.props.children}</h2>
        )
    }

}

export default PopUp;
