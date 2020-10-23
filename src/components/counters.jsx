import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
 

  render() {
    return (
      <div>
        <button
          onClick={this.props.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.handleDelete}
            onIncrement={this.props.handleIncrement}
          >
            <h3>Counter #{counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
