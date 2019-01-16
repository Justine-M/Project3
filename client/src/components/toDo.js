import React from "react";

class TodoApp extends React.Component {

    state = {
        items: [],
        done: [],
        text: ''
    }

    handleTodo = (number) => {
        const updatedToDo = this.state.items.map(item =>  {
            if(item.number !== number) {
                return item;
            } else {
                this.setState({
                    done: this.state.done.concat(item)
                })
                return '';
            }
        });
        this.setState({items : updatedToDo})
        console.log(this.state.items)
    }
  
    handleChange = (e) => {
      this.setState({ 
          [e.target.name]: e.target.value 
        });
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now(),
        number: this.state.items.length
      };
      this.setState({
        items: this.state.items.concat(newItem),
        text: ''
      });
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <ul>
            {this.state.items.length ? 
                this.state.items.map(item => (
                    <li onClick={() => this.handleTodo(item.number)} className="toDo" key={item.id}>{item.text}</li>    
                )) : ''}
        </ul>
        <h3>DONE</h3>
          <ul>
            {this.state.done.length ? 
                this.state.done.map(item => (
                    <li className="toDo" key={item.id}>{item.text}</li>    
                )) : ''}
        </ul>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
              name="text"
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
};


  export default TodoApp;