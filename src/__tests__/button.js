// /**
//  * @jest-environment jsdom
//  */
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../components/shared';
describe('Button component', () => {
  it('renders without an error', () => {
    render(<Button isDisable={false} text={'Button Text'} />);
    expect(screen.getByText('Button Text')).toBeInTheDocument();
  });

  it('calls the onClick function provided as a prop', () => {
    const onClickPropFunction = jest.fn();
    render(<Button onClick={onClickPropFunction} isDisable={false} text={'Button Text'} />);
    fireEvent.click(screen.getByText('Button Text'));
    expect(onClickPropFunction).toHaveBeenCalled();
  });
  it('prevents clicking when disabled', () => {
    const onClickPropFunction = jest.fn();
    render(<Button onClick={onClickPropFunction} isDisable={true} text={'Button Text'} />);
    fireEvent.click(screen.getByText('Button Text'));
    expect(onClickPropFunction).not.toHaveBeenCalled();
  });
});
