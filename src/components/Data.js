import React from "react"


function Data(props) {   
  return (
    <ul className="table-list">
      <li className="data-item" type='date' >{props.props.date ? props.props.date : null}</li>
      <li className="data-item" type='number'>{props.props.distance}</li>
      <li className="data-item">
        <button className="edit-button" name="edit" onClick={props.delete}>Edit</button>
        <button className="delete-button" name="delete" onClick={props.delete}>&#10008;</button>
      </li>
    </ul>
  )
}

export default Data