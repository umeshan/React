import React from 'react';
import {Button} from 'reactstrap';

 export const NoteList = ({notes,deleteNote}) => {
  //const {notes,deleteNote} = props;
  return(
    <ul>
    {
      notes.map((note,index) => {
        return (
        <li>{note} <Button color="danger" value={index} onClick={(index) => deleteNote(index)}>Delete</Button></li>
        )
      })
    }
    </ul>
  );
}
