'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");

var leftButtonStyle = {
  width: "48px",
  borderRadius: "4px 0px 0px 4px"
};

var rightButtonStyle = {
  width: "48px",
  borderRadius: "0px 4px 4px 0px"
};

var initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action) {
    case /* Increment */0 :
        return {
                count: state.count + 1 | 0
              };
    case /* Decrement */1 :
        return {
                count: state.count - 1 | 0
              };
    case /* Multiply */2 :
        return {
                count: Caml_int32.imul(state.count, 5)
              };
    
  }
}

function ReducerFromReactJSDocs(Props) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  return React.createElement("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }
            }, React.createElement("div", undefined, "Count: ", String(match[0].count)), React.createElement("div", undefined, React.createElement("button", {
                      style: leftButtonStyle,
                      onClick: (function (_event) {
                          return Curry._1(dispatch, /* Decrement */1);
                        })
                    }, "-"), React.createElement("button", {
                      style: rightButtonStyle,
                      onClick: (function (_event) {
                          return Curry._1(dispatch, /* Increment */0);
                        })
                    }, "+"), React.createElement("button", {
                      style: rightButtonStyle,
                      onClick: (function (_event) {
                          return Curry._1(dispatch, /* Multiply */2);
                        })
                    }, "*")));
}

var make = ReducerFromReactJSDocs;

exports.leftButtonStyle = leftButtonStyle;
exports.rightButtonStyle = rightButtonStyle;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
