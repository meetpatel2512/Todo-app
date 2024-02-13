import React, { Component } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default class index extends Component {
    state = {
        Todotext: '',
        TodoList: [],
    };

    changevalue = event => {
        this.setState(() => ({ Todotext: event.target.value }));
    };

    addTodo = event => {
        event.preventDefault();
        this.setState(({ Todotext, TodoList }) => ({
            TodoList: [
                ...TodoList,
                { id: new Date().valueOf(), text: Todotext, isDone: false },
            ],
            Todotext: '',
        }));
    };

    toggleTodo = item => {
        this.setState(({ TodoList }) => {
            const indexs = TodoList.findIndex(x => x.id === item.id);
            return {
                TodoList: [
                    ...TodoList.slice(0, indexs),
                    {
                        ...item, isDone: !item.isDone,
                    },
                    ...TodoList.slice(indexs + 1)
                ],
            };
        });
    };

    DeleteTodo = item => {
        this.setState(({ TodoList }) => {
            const indexs = TodoList.findIndex(x => x.id === item.id);
            return {
                TodoList: [...TodoList.slice(0, indexs), ...TodoList.slice(indexs + 1)],
            };
        });
    };

    render() {
        const { TodoList } = this.state;
        return (
            <div className="flex flex-col min-h-screen mx-3 gap-5">
                <div className="flex justify-center text-4xl capitalize my-8">
                    <h1>apna todo app</h1>
                </div>
                <form onSubmit={this.addTodo} className="flex justify-center">
                    <Input
                        className="basis-96 rounded-r-none capitalize"
                        placeholder="enter todo here..."
                        onChange={this.changevalue}
                    />
                    <Button
                        type="submit"
                        variant="default"
                        className="capitalize rounded-l-none text-white"
                    >
                        add todo
                    </Button>
                </form>
                <div className="flex flex-col md:mx-20 flex-1 gap-3">
                    {TodoList.map(item => (
                        <div className="flex items-center gap-3" key={item.id}>
                            <Checkbox onCheckedChange={() => this.toggleTodo(item)} />
                            <p
                                className={`flex-1 line-clamp-2 ${item.isDone && 'line-through'}`}
                            >
                                {item.text}
                            </p>
                            <Button
                                variant="outline"
                                className="bg-red-600 hover:bg-red-400 text-white capitalize"
                                onClick={() => this.DeleteTodo(item)}
                            >
                                delete
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="flex ">
                    <Button
                        variant="default"
                        className="flex-1 rounded-none bg-blue-600 hover:bg-blue-400"
                    >
                        All
                    </Button>
                    <Button
                        variant="destructive"
                        className="flex-1 rounded-none bg-red-600 hover:bg-red-400 "
                    >
                        Pending
                    </Button>
                    <Button
                        variant="secondary"
                        className="flex-1 rounded-none bg-green-600 hover:bg-green-400"
                    >
                        Complated
                    </Button>
                </div>
            </div>
        );
    }
}
