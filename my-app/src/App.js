  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
import React from 'react';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

  class App extends React.Component {
    constructor () {
      super();
      this.state = {
        tasks
      }
    }

    addTask = (e, item) => {
      e.preventDefault();
      const newItem = {
        name: item,
        id: Date.now(),
        purchased: false
      };
      this.setState({
        groceries: [...this.state.groceries, newItem]
      });
    };

    handleCompleted = (id) => {
      this.setState({
        tasks
      })
    }
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <button>Add</button>
      </div>
    );
  }
}

export default App;
