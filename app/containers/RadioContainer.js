import React,{ Component } from 'react';
import Radio from '../components/Radio';
class RadioContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      radioOption: [
        {
          text: "单选框-1",
          value: "radio-1",
          name: "radio-name",
          checked: true,
        },
        {
          text: "单选框-2",
          value: "radio-2",
          name: "radio-name",
          checked: false,
        },
      ]
    }
  }
  handleChangeRadio(index){
    console.log('index====',index)
    const _radioOption = this.state.radioOption;

    for(let r=0; r < _radioOption.length; r++){
        _radioOption[r].checked = false
    }

    _radioOption[index].checked = true;
    this.setState({radioOption: _radioOption})
    }
  render(){
    let that = this;
    return (
      <div>
        <Radio options={this.state.radioOption} onChange={this.handleChangeRadio.bind(this)}/>
      </div>
    )
  }
}
export default RadioContainer;
