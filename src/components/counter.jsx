// jsx is just a syntax which gets compiled to react elements 
// jsx does not have concept of loops 

import React, { Component } from "react";
// imrc is used

class Counter extends Component {
// cc is used
  render() {
    console.log("props", this.props);
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          {/* we can use {} these curly braces to render values dynamically */}
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="bnt btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // here "badge m-2 badge-" are boostrap classes 
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    // warning=yellow , primary=blue
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    //  so we are picking props.counter and storing it in value
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// ====================truthy , falsy=============================
//  you can apply logical and (&&) between non-boolean values. eg:
//  true && false you get false (this is an example of boolean values)
//  true && 'hi' you get 'hi' because when javascript engine tries to evaluate this expression it looks at the first operand , here first operand is true so it will look at second operand and since second operand is not true or false, so javascript engine will convert it to truthy or falsy
// The following table provides a complete list of JavaScript falsy values:
// false, 0	, -0, "", '', ``, null, undefined, NaN, document.all
// everything else except above values are truthy
// so in this(true && 'hi') case 'hi' will be considered as truthy and since both are opeerands are truthy therefore it will return 'hi'
// true && 'hi' && 1 you get 1
// so in 
// {this.state.tags.length === 0 && "please create a new tag"}
//  you will get "please create a new tag" if this.state.tags.length === 0 is true

// ==================handling events=====================
// React events are written in camelCase syntax:
// onClick instead of onclick.
// React event handlers are written inside curly braces:
// onClick={shoot}  instead of onClick="shoot()"

// ================Binding event handlers==============

// JavaScript this keyword refers to the object it belongs to.
// it has different values depending on where it is used:
// In a method, this keyword refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.
// go to w3 for complete details

// constructor() method
// constructor() method is a special method for creating and initializing objects created within a class.
// Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.
// You can use the super() method to call the constructor of a parent class 

// bind() method
// bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.

// As we know When this keyword is used alone, the owner is the Global object, so 'this' refers to the Global object and if the strict mode is enabled then this returns undefined.
// In a browser window the Global object is [object Window].
// eg
// class Counter extends Component {
//   state = {
//     count: 0
//   };
//   handleIncrement() {
//     console.log("increment clicked", this);
//   }

//   render() {
//     return(
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
//           Increment
//         </button>
//       </div>
//     )
//   }
// in event handler we don't have access to this keyword
//  here onClick is event handler and we have used 'this'. but here we don't have access to handleIncrement in onClick 
// so to solve this problem we will use constructor() method, super() and bind() method

// class Counter extends Component {
//   state = {
//     count: 0
//   };

//   constructor(){
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
//   }

//   handleIncrement() {
//     console.log("increment clicked", this);
//   }

//   render() {
//     return(
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
//           Increment
//         </button>
//       </div>
//     )
//   }
//  now onClick has access to handleIncrement
//  but we can also do this with arrow function:

// class Counter extends Component {
//   state = {
//     count: 0
//   };

  
//   handleIncrement= () => {
//     console.log("increment clicked", this);
//   }

//   render() {
//     return(
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
//           Increment
//         </button>
//       </div>
//     )
//   }
  // here we have used arrow function instead of constructor()

  // the proper way of increasing the count by 1 is:

  // class Counter extends Component {
  //   state = {
  //     count: 0
  //   };    
  //   handleIncrement= () => {
  //     this.setState({ count: this.state.count + 1});
  //   }
  
  //   render() {
  //     return(
  //       <div>
  //         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
  //         <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
  //           Increment
  //         </button>
  //       </div>
  //     )
  //   }

  // ==================props and state===============
  // props include data that we give to a component 
  // whereas state include data that is local or private to that component
  // props is read-only means we cannot change the input to this component inside of this component
  
