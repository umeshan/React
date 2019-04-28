import React from 'react';
import {Table, Pagination, PaginationLink, PaginationItem,Button} from 'reactstrap';
import {Modal} from '../Modal';
import './Users.css'


class Users extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      recordsPerPage: 10,
      currentPage: 1,
      modalProps:{}
    }
    //this.currentItem = Array(React.createRef();
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    this.setState({users: json});
  });
  }

paginate = (e) => {
  console.log(e.currentTarget.value);
  this.setState({currentPage:parseInt(e.currentTarget.value)});
}

editDetail = (data) => {
  const filteredUsers = this.state.users.map((note, index) => {
   return note.id === data.id? data:note
  });

  this.setState({
    users:filteredUsers,
    modalProps: {}
  })
}
editItem = (e) => {
  const currentIndex = parseInt(e.currentTarget.id);
  const filteredUsers = this.state.users.filter((note, index) => note.id === currentIndex)[0];

  this.setState({
      modalProps: {...filteredUsers, open: true}
    });

}
deleteItem = (e) => {
  const {currentPage, users} = this.state;
  const currentIndex = parseInt(e.currentTarget.id);
  const filteredUsers = users.filter((note, index) => note.id !== currentIndex);
  const nooFPages = Math.ceil(filteredUsers.length/this.state.recordsPerPage);

  this.setState({
    users:filteredUsers,
    currentPage: (currentPage>nooFPages)?nooFPages:currentPage
  })

}
// 1 to 10
// currentPage : 1
// recordsPerPage : 10
// index >= (currentPage - 1) * recordsPerPage && index < (currentPage) * recordsPerPage
// 0 >= (1 -1) * 10 &&  0 < 1*10 = 0 >= 0 && 0 <10

  render() {
    const {users,currentPage,recordsPerPage, modalProps} = this.state;
    const noOfPages = (users && users.length) ? Math.ceil(users.length/this.state.recordsPerPage):0;

    return (
        <div>
            <Table className='usersDetails' bordered>
            <thead>
              <tr>
                <th>UserID</th>
                <th>Title</th>
                <th>Body</th>
                <th colSpan='2'>Action</th>
              </tr>
            </thead>
            <tbody >

                {users.length < 1 ?
                  <tr><td className='text-danger' colSpan='3'> No user records found</td></tr>
                  : users
                  .filter((user,index) => {
                    return index >= (currentPage - 1) * recordsPerPage && index < (currentPage) * recordsPerPage;
                  })
                  .map((user,index)=> {
                    return(<tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                    <td>
                      <span><Button outline color="success" id={user.id} value={index} onClick={this.editItem}> Edit</Button></span>
                    </td>
                    <td>
                      <span><Button outline color="danger" id={user.id} value={index} onClick= {this.deleteItem}> Delete </Button></span>
                    </td>
                    </tr>);
                  })
              }

            </tbody>
            </Table>

            <Pagination className= 'justify-content-center' size="lg">
            <PaginationItem disabled={(currentPage - 1) < 1}>
              <PaginationLink first value={1} onClick={this.paginate} />
            </PaginationItem>
            <PaginationItem disabled={(currentPage - 1) < 1}>
              <PaginationLink previous  value={currentPage - 1} onClick={this.paginate} />
            </PaginationItem>
              {[...Array(noOfPages).keys()].map(key =>
                <PaginationItem key={key} active={key+1 === currentPage}>
                  <PaginationLink value={key + 1}  onClick={this.paginate}>{key + 1}</PaginationLink>
                </PaginationItem>
              )}
              <PaginationItem disabled={(currentPage) >= noOfPages}>
                <PaginationLink next value={(currentPage + 1)} onClick={this.paginate} />
              </PaginationItem>
              <PaginationItem disabled={(currentPage) >= noOfPages}>
                <PaginationLink last value={noOfPages} onClick={this.paginate} />
              </PaginationItem>
            </Pagination>
            <Modal data={modalProps} editDetail={this.editDetail}/>
        </div>
    )

  };


}

export default Users;
