import Image from '..';
import { render } from '../../../test/utils';

/* eslint-disable */
describe('Image Component', () => {
  it('Renders Correctly', () => {
    const ImageGroup = render(
      <>
        <Image src="cat1.png" width="160px" height="130px" />
        <Image src="cat2.png" width="160px" height="130px" />
        <Image src="cat1.png" width="160px" height="130px" rounded />
        <Image src="cat2.png" width="160px" height="130px" circle />
        <Image src="cat3.png" width="160px" height="130px" outline />
      </>
    );
    expect(ImageGroup).toMatchSnapshot();
  });
});
