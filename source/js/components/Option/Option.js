import React, {Component} from 'react';

export class Option extends Component{

    render(){
        const {name,value} = this.props;
        return <option value={value}>{name}</option>
    }
}

export default Option;
