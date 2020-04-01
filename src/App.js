import React from 'react';
import './App.css';
import ListItems from './ListItems'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class App extends React.Component {
constructor(props) {
  super(props);
  this.state={
    items:[],
    currentItem:{
      text:'',
      key:''
    }
  }
  this.handleInput = this.handleInput.bind(this);  
  this.addItem = this.addItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
  this.setUpdate = this.setUpdate.bind(this);

}
handleInput(e){
  this.setState({
    currentItem:{
      text: e.target.value,
      key: Date.now()
    }
  })
}

addItem(e){
  e.preventDefault();
  e.target.reset()
  const newItem = this.state.currentItem;

  
  if(newItem.text!==''){
    const newitems = [...this.state.items, newItem]
    this.setState({
      items:newitems,
      currentItem:{
        items:'', 
        key:''     
      }
    })
  }

}

deleteItem(key){
const filteredItems = this.state.items.filter(item => item.key!==key);
this.setState({
  items:filteredItems
})
}

setUpdate(text, key){
  console.log("items:"+this.state.items)
  const items = this.state.items;
  items.map(item =>{
    if(item.key===key){
      item.text=text;
    }
  })
  this.setState({
    items:items
  })
}

 

  render() { 
    return (
 

  

      <div className='App'>
      <header>
        <form onSubmit={this.addItem} className="form"  >
          <input className='task' type='text' placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
          <button className="btn" type='submit' >Add</button>
        </form>
      </header>
      <ListItems items = {this.state.items} 
      deleteItem = {this.deleteItem}
      setUpdate ={this.setUpdate}
       ></ListItems>
      </div>
  
     
      )
  }
}
 


export default App;
