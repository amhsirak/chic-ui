import Card from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Card Component', () => {
  it('Renders Correctly', () => {
    const CardGroup = render(
      <>
        <Card
          type="secondary"
          title="Title"
          subTitle="Subtitle"
          description="Lorem ipsum dolor sit amet, consectetur"
          footer="Footer"
          href="https://github.com/karishmashuklaa/chic-ui"
          hrefText="Visit site"
        />
      </>
    );
    expect(CardGroup).toMatchSnapshot();
  });
});
