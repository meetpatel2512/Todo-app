import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';

function Todotype({ changefilterTypes }) {
  return (
    <div>
      <div className="flex ">
        <Button
          variant="default"
          className="flex-1 rounded-none bg-blue-600 hover:bg-blue-400"
          onClick={() => changefilterTypes('all')}
        >
          All
        </Button>
        <Button
          variant="destructive"
          className="flex-1 rounded-none bg-red-600 hover:bg-red-400 "
          onClick={() => changefilterTypes('pending')}
        >
          Pending
        </Button>
        <Button
          variant="secondary"
          className="flex-1 rounded-none bg-green-600 hover:bg-green-400"
          onClick={() => changefilterTypes('complated')}
        >
          Complated
        </Button>
      </div>
    </div>
  );
}

Todotype.propTypes = {
  changefilterTypes: PropTypes.func.isRequired,
};
export default memo(Todotype);
