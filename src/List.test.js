import React from 'react';
import ReactDOM from 'react-dom'
import List from './List'
import renderer from 'react-test-renderer'

describe('<List />', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');

      // Pass required props in the usual way
      ReactDOM.render(
          <List
              name="Joe"
              avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
              inSession={true}
              onStage={true}
          />,
          div
      );

      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    // Render the component, as JSON
    const tree = renderer.create(<List
      name="Joe"
      avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
      inSession={true}
      onStage={true}
  />).toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/App.test.js.snap
    expect(tree).toMatchSnapshot(); 
});
});
