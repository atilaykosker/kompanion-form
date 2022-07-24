// /**
//  * @jest-environment jsdom
//  */
import { render } from '@testing-library/react';
import { GoalFields, InfoFields, MassFields, WorkoutDaysFields } from '../components/Fields/index';
describe('Fields', () => {
  it('renders goal fields without an error', () => {
    const view = render(<GoalFields data={{ goal: '' }} />);
    expect(view).toBeTruthy();
  });
  it('renders info fields without an error', () => {
    const view = render(<InfoFields data={{}} />);
    expect(view).toBeTruthy();
  });
  it('renders mass fields without an error', () => {
    const view = render(<MassFields data={{}} />);
    expect(view).toBeTruthy();
  });
  it('renders workout days fields without an error', () => {
    const view = render(<WorkoutDaysFields data={{ workoutDays: [] }} />);
    expect(view).toBeTruthy();
  });
});
