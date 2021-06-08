import React, {useState} from 'react';
import "./App.css";
import Items from './Components/Todo';
function App() {

  const [inputs, setInputs] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setInputs(val)
  }

  const itemList = () => {
    if(inputs.length > 0){
      setItems((prevItems) => {
        return [...prevItems, inputs];
      });
      setInputs("");
    }
    else{
      alert("Fill the value");
    }
  }

  const deleteItem = (id) => {
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="inp">
      <input type="text"
       onChange={handleChange}
       value={inputs}></input>
       </div>
       <div className="btn">
      <button className="btn btn-outline-success" onClick={itemList} id="btn"><b>Add Activities</b></button>
      </div>
      <div className="item-container">
      <ol>
        {items.map((item, index) => {
          return (
              <Items key={index} id={index} text={item} onCheck={deleteItem}/>
          );
        })}
      </ol>
      </div>
    </div>
  );
}

export default App;