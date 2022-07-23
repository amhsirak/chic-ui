import Button from '..';
import { render } from '../../../test/utils';
import SearchIcon from '../../../icons/Search';

/* eslint-disable */
describe('Button Component', () => {
  it('Renders Correctly', () => {
    const ButtonGroup = render(
      <>
        <div>
          <Button size="large">Large</Button>
          <Button size="default">Default</Button>
          <Button size="small">Small</Button>
        </div>
        <div>
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
          <Button type="warning">Warning</Button>
          <Button type="success">Success</Button>
          <Button type="danger">Danger</Button>
          <Button type="info">Info</Button>
          <Button type="light">Light</Button>
        </div>
        <div>
          <Button loading type="secondary" />
          <Button loading type="light" />
          <Button disabled>Disabled</Button>
          <Button type="light" icon={SearchIcon}>
            Search
          </Button>
        </div>
      </>
    );
    expect(ButtonGroup).toMatchSnapshot();
  });
});
