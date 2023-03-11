import Steps from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Steps Component', () => {
  it('Renders Correctly', () => {
    const StepsGroup = render(
      <>
        <Steps direction="horizontal">
          <Steps.Step title="Step One" subTitle="Step one details" />
          <Steps.Step title="Step Two" subTitle="Step two details" />
          <Steps.Step title="Step Three" subTitle="Step three details" />
          <Steps.Step title="Step Four" subTitle="Step four details" />
        </Steps>

        <Steps direction="vertical">
          <Steps.Step title="Step One" subTitle="Step one details" />
          <Steps.Step title="Step Two" subTitle="Step two details" />
          <Steps.Step title="Step Three" subTitle="Step three details" />
          <Steps.Step title="Step Four" subTitle="Step four details" />
        </Steps>

        <Steps divider="------">
          <Steps.Step title="Step One" subTitle="Step one details" />
          <Steps.Step title="Step Two" subTitle="Step two details" />
          <Steps.Step title="Step Three" subTitle="Step three details" />
          <Steps.Step title="Step Four" subTitle="Step four details" />
        </Steps>
      </>
    );
    expect(StepsGroup).toMatchSnapshot();
  });
});
