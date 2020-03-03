import React from 'react';
import ReactDOM from 'react-dom'
import Stage from './Stage'
import renderer from 'react-test-renderer'

describe('<Stage />', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');

      // Pass required props in the usual way
      ReactDOM.render(
          <Stage
              name="Joe"
              avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
              onStage={true}
          />,
          div
      );

      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    // Render the component, as JSON
    const tree = renderer.create(<Stage
      name="Joe"
      avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
      onStage={true}
  />).toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/App.test.js.snap
    expect(tree).toMatchSnapshot(); 
});
});