import React, {Component} from 'react';

export class Input extends Component{
    render(){
        const {name,placeholder,type,value,onChange,isRequered} = this.props;
        return <input
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={isRequered}
                />
    }
}

export default Input;
