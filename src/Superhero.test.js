import React from 'react';
import ReactDOM from 'react-dom';
import Superhero from "./Superhero";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Superhero />, div);
  ReactDOM.unmountComponentAtNode(div);
});
