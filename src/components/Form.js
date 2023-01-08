import React, { useState } from "react";
import shortid from "shortid";
import Data from "./Data";

const list = [];

const newData = {
  date: '',
  distance: '',
}

function Form() {
  const [data, setForm] = useState(newData);
  
  const handleEvent = (event) => {
    event.preventDefault();
    const { name } = event.target;

    setForm((prevForm) => ({
      ...prevForm, [name]: event.target.value
    }));
  };

  function addDistance(event) {
    event.preventDefault();
        
    if (data.date === '' || data.distance === '') {
      return 
    } 
    
    if (newData.date === data.date) {
      let result = Number(newData.distance) + Number(data.distance)
      return result
    }
    
    list.unshift(data);
    list.sort(function (a, b) {
      if (a.date < b.date) {
        return 1
      }
    
      if (a.date > b.date) {
        return -1
      }
    
      return 0
    })
    setForm(newData);
  }

  function deleteEvent(event) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].date === event.target.closest('ul').firstChild.textContent) {
        list.splice(i, 1);
      }
    } 
    
    setForm((prevForm) => ({
      ...prevForm
    }))
  }

  return (
    <div className="container">
      <div>
        <form className="input-form" onSubmit={addDistance}>
          <label>
            <span>Дата (ДД.ММ.ГГ)</span>
            <input name='date' type='date' value={data.date} onChange={handleEvent}></input>
          </label>
          <label>
            <span>Пройдено км</span>
            <input name="distance" type="number" value={data.distance} onChange={handleEvent}></input>
          </label>
          <button className="submit" type="submit">ОК</button>
        </form>
      </div>
      <div className="data-container">
        <div className="data-titles">
          <span>Дата (ДД.ММ.ГГ)</span>
          <span>Пройдено км</span>
          <span>Действия</span>
        </div>
        <div className="table-form">
          {list.map((item) => <Data props={item} key={shortid.generate()} delete={deleteEvent} />)}
        </div>
      </div>
    </div>
  )
}

export default Form;