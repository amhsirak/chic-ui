import CardGroup from '..';
import { Card } from '../../card';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Card Group Component', () => {
  it('Renders Correctly', () => {
    const CardGroups = render(
      <>
        <CardGroup>
          <Card
            type="secondary"
            title="Title"
            subTitle="Subtitle"
            description="Lorem ipsum dolor sit amet, consectetur"
            footer="Footer"
            href="https://github.com/karishmashuklaa/chic-ui"
            hrefText="Visit site"
          />
        </CardGroup>
      </>
    );
    expect(CardGroups).toMatchSnapshot();
  });
});
