import React, { PureComponent, createRef, memo } from 'react';
import PropTypes from 'prop-types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

class FormList extends PureComponent {
  PagePerItem = 5;

  state = {
    page: 1,
    editMode: -1,
  };

  editRef = createRef();

  async editTodo(item) {
    try {
      const res = await fetch(`http://localhost:3000/todolist/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...item,
          text: this.editRef.current.value,
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
          editMode: -1,
        };
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { TodoList, filterType, DeleteTodo } = this.props;
    const { editMode, page } = this.state;
    return (
      <div className="flex flex-col md:mx-20 flex-1 gap-3">
        {TodoList.slice(
          this.PagePerItem * (page - 1),
          this.PagePerItem * page,
        ).map(item => {
          if (
            filterType === 'all' ||
            (filterType === 'pending' && item.isDone === false) ||
            (filterType === 'complated' && item.isDone === true)
          ) {
            return (
              <div className="flex items-center gap-3" key={item.id}>
                <Checkbox
                  checked={item.isDone}
                  onCheckedChange={() => filterType(item)}
                />
                {editMode === item.id ? (
                  <form
                    className="flex-1 flex gap-4"
                    onSubmit={() => this.editTodo(item)}
                  >
                    <input
                      type="text"
                      className="flex-1 border-2"
                      ref={this.editRef}
                    />
                    <Button type="Submit">Submit</Button>
                  </form>
                ) : (
                  <p
                    className={`flex-1 line-clamp-2 ${item.isDone ? 'line-through' : ''}`}
                  >
                    {item.text}
                  </p>
                )}
                <Button
                  onClick={() =>
                    this.setState(
                      () => ({ editMode: item.id }),
                      () => {
                        this.editRef.current.value = item.text;
                      },
                    )
                  }
                >
                  Edit
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger className="bg-red-600 hover:bg-red-400 px-5 text-white py-1 rounded-lg">
                    Delete
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure to want delete this todo?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your Todo and remove your todo from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => DeleteTodo(item)}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            );
          }
          return null;
        })}
        <div className="flex justify-between mt-7">
          <Button
            onClick={() => this.setState(({ page }) => ({ page: page - 1 }))}
            disabled={page <= 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => this.setState(({ page }) => ({ page: page + 1 }))}
            disabled={page >= Math.ceil(TodoList.length / this.PagePerItem)}
          >
            next
          </Button>
        </div>
      </div>
    );
  }
}

FormList.PropTypes = {
  TodoList: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired,
  DeleteTodo: PropTypes.func.isRequired,
};
export default memo(FormList);
