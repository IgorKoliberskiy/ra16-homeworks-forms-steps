import React from "react"


function Data(props) {   
  return (
    <ul className="data">
      <li className="data-item" type='date' >{props.props.date ? props.props.date : null}</li>
      <li className="data-item" type='number'>{props.props.distance}</li>
      <li>
        <div>
          <button className="delete-button" name="delete" onClick={props.delete}>&#10008;</button>
        </div>
      </li>
    </ul>
  )
}

export default Data