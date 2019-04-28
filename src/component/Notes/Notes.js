import React, {Component} from 'react';
import {Button,Input,CardBody,CardTitle,CardText,Form,FormGroup,Dropdown,DropdownMenu,DropdownItem,DropdownToggle} from 'reactstrap';
import {NoteList} from './NoteList'

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:'',
      counter : 0,
      notes : []
    };
  }

  handleClick = () => {
    this.setState({
      note:'LearnedNow'
    });
  }

  handleCounter = () => {
    this.setState({
      counter:this.state.counter + 1
    });
  }

addNote = (e) => {
  e.preventDefault();
if(this.state.note){
  this.setState({
    notes:[...this.state.notes,this.state.note]
  })
}

}

handleTextChange = (e) => {
  console.log('Text update');
  this.setState({
    note: e.currentTarget.value
  })
}

deleteNote = (e) => {
  const currentIndex = parseInt(e.currentTarget.value);
  const notes = this.state.notes.filter((note, index) => index !== currentIndex);
  this.setState({
    notes
  })
}
  render() {
    return (
      <CardBody>
        <div className="notesSection">
          <CardTitle> Hello in Class world,Beauty {this.state.note}</CardTitle>
          { /* <Button color='info' onClick={this.handleClick}>Click Me</Button> */}
          <CardText>Counter {this.state.counter}</CardText>
          <Button color='info' onClick={this.handleCounter}>Counter</Button>
            <Form onSubmit={this.addNote} inline>
            <CardText>Input text:</CardText>
              <FormGroup>
                <Input type='text' onChange={this.handleTextChange}/>
              </FormGroup>
              <Button color="success" onClick={this.addNote}>Add Note</Button>
              </Form>
              <NoteList notes={this.state.notes} deleteNote={this.deleteNote}/>
          </div>
        </CardBody>
    )
  }
}

export default Notes;
