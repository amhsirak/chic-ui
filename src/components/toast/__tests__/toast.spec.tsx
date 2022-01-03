import toast from '..';
import { render } from '../../../test/utils';

describe('Toast Component', () => {
  it('Renders Correctly', () => {
    const ToastGroup = render(
      <>
        <button
          onClick={() =>
            toast.open({
              title: 'ERROR!',
              message: 'Please enter your name',
              type: 'danger',
              duration: 3000
            })
          }
        >
          Show toast
        </button>
      </>
    );
    expect(ToastGroup).toMatchSnapshot();
  });
});
