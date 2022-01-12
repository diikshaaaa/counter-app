import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {counters, onReset, onDelete, onIncrement, onDecrement} = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            // key is added so that if we add a lot of things from virtual dom to actual dom then actualdom knows where to add which item and this is done by using key
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
      // since we want to return single element from render(), that is why <div></div> is used 
    );
  }
}

export default Counters;