import React, { Component } from 'react'
import {render} from 'react-dom'
class Radio extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let that = this;
    console.log('this.props==',that.props)
    return (<div>
      {that.props.options.map((item,index)=>{
        return(
          <div key={index}>
            <input type="radio" name={item.name}
            defaultChecked={item.checked} 
            onChange={this.props.onChange.bind(this,index)}/>
          </div>
        )
      })}
      </div>
    )
  }
}
Radio.defaultProps = {
  onChange(){},
}

export default Radio;
