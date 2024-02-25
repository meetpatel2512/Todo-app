import React, { Component, createRef } from 'react';
import Todotype from './Todotype';
import Form from './Form';
import FormList from './FormList';

export default class index extends Component {
  state = {
    filterType: 'all',
    TodoList: [],
  };

  inputref = createRef();

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:3000/todolist');
      const todolist = await res.json();

      this.setState({ TodoList: todolist });
    } catch (error) {
      console.log(error);
    }
  }

  addTodo = async event => {
    try {
      event.preventDefault();
      const Todotext = this.inputref.current;
      const res = await fetch('http://localhost:3000/todolist', {
        method: 'POST',
        body: JSON.stringify({
          text: Todotext.value,
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const data = await res.json();
      this.setState(
        ({ TodoList }) => ({ TodoList: [...TodoList, data] }),
        () => {
          Todotext.value = '';
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  toggleTodo = async item => {
    try {
      const res = await fetch(`http://localhost:3000/todolist/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...item,
          isDone: !item.isDone,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const toggledata = await res.json();
      this.setState(({ TodoList }) => {
        const indexs = TodoList.findIndex(x => x.id === item.id);
        return {
          TodoList: [
            ...TodoList.slice(0, indexs),
            toggledata,
            ...TodoList.slice(indexs + 1),
          ],
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  DeleteTodo = async item => {
    try {
      await fetch(`http://localhost:3000/todolist/${item.id}`, {
        method: 'DELETE',
      });

      this.setState(({ TodoList }) => {
        const indexs = TodoList.findIndex(x => x.id === item.id);
        return {
          TodoList: [
            ...TodoList.slice(0, indexs),
            ...TodoList.slice(indexs + 1),
          ],
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  changefilterTypes = filterType => {
    this.setState({ filterType });
  };

  render() {
    const { TodoList, filterType } = this.state;
    return (
      <div className="flex flex-col min-h-screen mx-3 gap-5">
        <div className="flex justify-center text-4xl capitalize my-8">
          <h1>apna todo app</h1>
        </div>

        <Form addTodo={this.addTodo} ref={this.inputref} />

        <FormList
          filterType={filterType}
          TodoList={TodoList}
          toggleTodo={this.toggleTodo}
          DeleteTodo={this.DeleteTodo}
          
        />

        <Todotype
          changefilterTypes={this.changefilterTypes}
          filterType={this.filterType}
        />
      </div>
    );
  }
}
