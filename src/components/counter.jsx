import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDelete = this.handleDelete.bind(this);
  // }

  // state = {
  //   value: this.props.counter.value,
  //   // tags: ["tag1", "tag2", "tag3"],
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // render() {
  //   return (
  //     <div>
  //       {this.state.tags.length === 0 && "Please Create a new Tag!"}
  //       {this.renderTags()}
  //     </div>
  //   );
  // }

  // styles = {
  //   fontSize: 30,
  //   fontWeight: "bold",
  // };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => {
                this.props.onIncrement(this.props.counter);
              }}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => {
                this.props.onDecrement(this.props.counter);
              }}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0? "disabled": ""}
            >
              {" "}
              -
            </button>
            <button
              onClick={() => {
                this.props.onDelete(this.props.counter.id);
              }}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
            {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
          </div>
        </div>
        {/* <h4>{this.props.id}</h4> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
