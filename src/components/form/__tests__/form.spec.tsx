import Form from '..';
import { render } from '../../../test/utils';
import { isEmail, isStrongPassword } from '../validators';

const onSubmit = (values: any) => {
  console.log('submit form: ', values);
};

/* eslint-disable */
describe('Form Component', () => {
  it('Renders Correctly', () => {
    const FormGroup = render(
      <>
        <Form onSubmit={onSubmit}>
          <Form.Input
            placeholder="Enter your full name"
            name="fullname"
            label="Full name"
            required
          />

          <Form.Input
            placeholder="Enter your email"
            name="email"
            label="Email"
            required
            validate={[isEmail('Invalid email.')]}
          />

          <Form.Input
            type="password"
            placeholder="Enter your password"
            name="password"
            label="Password"
            required
            validate={[
              isStrongPassword(
                'Password must be at least 8 characters, 1 lower case characters, 1 upper case characters, 1 numbers and 1 symbols'
              )
            ]}
          />

          <Form.RadioGroup label="Gender" name="gender">
            <Form.Radio value="male" label="Male" />
            <Form.Radio value="female" label="Female" />
          </Form.RadioGroup>

          <Form.Input
            label="Description"
            name="bio"
            placeholder="Enter your bio"
            rows={5}
          />

          <Form.CheckboxGroup label="Internet" required>
            <Form.Checkbox label="3G" value="3g" name="internet" id="3g" />
            <Form.Checkbox label="4G" value="4g" name="internet" id="4g" />
          </Form.CheckboxGroup>

          <Form.SubmitButton>Submit</Form.SubmitButton>
        </Form>
      </>
    );
    expect(FormGroup).toMatchSnapshot();
  });
});
