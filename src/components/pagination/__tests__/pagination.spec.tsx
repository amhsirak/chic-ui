import Pagination from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Pagination Component', () => {
  it('Renders Correctly', () => {
    const PaginationGroup = render(
      <>
        <div>
          <Pagination
            bgType="success"
            pages={7}
            startCountInZero
            activeBg="white"
            activeColor="black"
            activeHoverColor="black"
            whenNextPage={(page) =>
              alert(`whenNextPage page hit, currently on page ${page}`)
            }
            whenPreviousPage={(page) =>
              alert(`whenPreviousPage page hit, currently on page ${page}`)
            }
            whenPageChange={(page) =>
              alert(`whenPageChange hit, currently on page ${page}`)
            }
          />
        </div>
        <div>
          <Pagination
            customBg={{
              bgColor: 'gray',
              hover: 'black',
              color: 'yellow'
            }}
            pages={4}
            activeBg="white"
            activeColor="black"
            activeHoverColor="black"
            whenNextPage={(page) =>
              alert(`whenNextPage page hit, currently on page ${page}`)
            }
            whenPreviousPage={(page) =>
              alert(`whenPreviousPage page hit, currently on page ${page}`)
            }
            whenPageChange={(page) =>
              alert(`whenPageChange hit, currently on page ${page}`)
            }
          />
        </div>
      </>
    );
    expect(PaginationGroup).toMatchSnapshot();
  });
});
