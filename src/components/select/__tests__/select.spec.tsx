import Select from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Select Component', () => {
  it('Renders Correctly', () => {
    const SelectGroup = render(
      <>
        <div>
          <Select
            width="200px"
            data={['India', 'Japan', 'Germany', 'Russia']}
            placeholder="Select a country"
            onChange={(value) => alert(value)}
          />
        </div>
        <div>
          <Select
            multiSelect
            width="400px"
            data={[
              { id: 1, game: 'Hockey' },
              { id: 2, game: 'Football' },
              { id: 3, game: 'Tennis' }
            ]}
            dataKey="id"
            dataName="game"
            placeholder="Select a sport"
            onChange={(value) => alert(value)}
          />
        </div>
      </>
    );
    expect(SelectGroup).toMatchSnapshot();
  });
});
