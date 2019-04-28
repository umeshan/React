import React, {Component} from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,Input} from 'reactstrap';
import './modal.css';

class ModalView extends Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
        this.element = React.createRef();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({modal: nextProps.data.open});
    }
    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    onSave = () => {
        const body = this.element.current.value;
        this.props.editDetail({...this.props.data, body});
     }
    render(){
        const {data} = this.props;
        return (
        <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{data.title}</ModalHeader>
            <ModalBody>
                <textarea className='custom-ta' defaultValue={data.body} ref={this.element} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.onSave}>Save</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
    );
    }
}

export default ModalView;
