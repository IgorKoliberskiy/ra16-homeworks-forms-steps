import React, { useState } from "react";
import shortid from "shortid";
import Data from "./Data";

const list = [];

const newData = {
  date: '',
  distance: '',
}

function Form() {
  const [form, setForm] = useState(newData);

  const handleEvent = (event) => {
    event.preventDefault();
    const { name } = event.target;

    setForm((prevForm) => ({
      ...prevForm, [name]: event.target.value
    }));
  };

  function addDistance(event) {
    event.preventDefault();
        
    if (form.date === '' && form.distance === ''){
      return
    } 
    
    if (form.date !== '' && form.distance !== '') {
      for (let i = 0; i < list.length; i++) {
        if (form.date === list[i].date) {
          list[i].distance = Number(list[i].distance) + Number(form.distance)
          setForm((prevList) => ({
            ...prevList, [list[i].distance]: event.target.value
          })); 
          console.log(list)
          return list
        }
      }
    }

    list.unshift(form)  
       
    list.sort(function (a, b) {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
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
            <input name='date' type='text' value={form.date} onChange={handleEvent}></input>
          </label>
          <label>
            <span>Пройдено км</span>
            <input name="distance" type="number" value={form.distance} onChange={handleEvent} min="0" max="50"></input>
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