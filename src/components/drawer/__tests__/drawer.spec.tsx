import ReactDOM from 'react-dom';
import Drawer from '../drawer';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Drawer Component', () => {
  it('Renders Correctly', () => {
    ReactDOM.createPortal = jest.fn((children, container) => {
      return children;
    }) as any;

    const DrawerGroup = render(
      <>
        <Drawer placement="right" header="Drawer Header" footer="Drawer Footer">
          <div>Some contents...</div>
          <div> Some contents...</div>
          <div> Some contents...</div>
        </Drawer>
        <Drawer
          placement="left"
          closable={false}
          header="Drawer Header"
          footer="Drawer Footer"
        >
          <div>Some contents...</div>
          <div> Some contents...</div>
          <div> Some contents...</div>
        </Drawer>
        <Drawer placement="top">
          <div>Some contents...</div>
          <div> Some contents...</div>
          <div> Some contents...</div>
        </Drawer>
        <Drawer placement="bottom" size="large" closeIcon="X">
          <div>Some contents...</div>
          <div> Some contents...</div>
          <div> Some contents...</div>
        </Drawer>
      </>
    );
    expect(DrawerGroup).toMatchSnapshot();
  });
});
