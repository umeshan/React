import React from 'react';
import {Form,CardText,FormGroup,Input,Button} from 'reactstrap';
import './conversion.css';


class Conversion extends React.Component {


constructor(props){
  super(props);
  this.state = {
    distanceInput: 0,
    distanceOption: '',
    convertedDistance: 0
  }
}

handleChange = (e) => this.setState({
    distanceInput: e.currentTarget.value
  });


  doConvert = (e) => {

    const {distanceInput, distanceOption} = this.state;
    let option;
    if (e.type === 'change') {
      option = e.currentTarget.value;

    } else {
      e.preventDefault();
      option = distanceOption;
    }
    const value =  option !== '' ?
      (option === '1' ? `${distanceInput * 1.60934}` : `${(distanceInput / 1.60934).toFixed(3)}`)
      : '';
    this.setState({
      convertedDistance: value,
      distanceOption: option
    })
  }

render(){
    return (

      <Form onSubmit={this.doConvert} inline className='conversion'>
      <CardText>Distance Conversion</CardText>
        <FormGroup>
          <Input type ='text' name='text' onChange={this.handleChange}/>
        </FormGroup>
          <Input onChange={this.doConvert} type='select'>
          <option value=''>Select</option>
            <option value='1'>Miles to KM</option>
            <option value='2'>Km to Miles</option>
          </Input>
          <Button hidden></Button>
          <Input value={this.state.convertedDistance} type='text' readOnly />
      </Form>
    );
}

}

export default Conversion;
