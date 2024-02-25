import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Form({ addTodo }, inputref) {
  return (
    <form onSubmit={addTodo} className="flex justify-center">
      <Input
        className="basis-96 rounded-r-none"
        placeholder="enter todo here..."
        ref={inputref}
        required
      />
      <Button
        type="submit"
        variant="default"
        className="capitalize rounded-l-none text-white"
      >
        add todo
      </Button>
    </form>
  );
}

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default memo(forwardRef(Form));
