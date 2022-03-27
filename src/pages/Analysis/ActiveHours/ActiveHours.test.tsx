import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActiveHours, {getActiveHours} from './ActiveHours';
import {Hour} from '../model/Hour';

jest.mock('react-chartjs-2', () => ({
  Bar: () => null
}));

describe('<ActiveHours />', () => {
  it('should mount', () => {
    render(<ActiveHours hours={[]}/>);
    
    const activeHours = screen.getByTestId('ActiveHours');

    expect(activeHours).toBeInTheDocument();
  });

  describe('getActiveHours', () => {
    it('should return a list of occurrences and insert 0 when the hour is missing', () => {
      const activeHours = [
        new Hour(0, 5),
        new Hour(2, 3),
        new Hour(5, 7),
        new Hour(9, 10)
      ];

      const expectedOccurrences = [5, 0, 3, 0, 0, 7, 0, 0, 0, 10];

      expect(getActiveHours(activeHours)).toEqual(expectedOccurrences);
    });
    it('should not add any 0 occurrences when all hours exist', () => {
      const activeHours = [
        new Hour(0, 5),
        new Hour(1, 3),
        new Hour(2, 7),
        new Hour(3, 10)
      ];

      const expectedOccurrences = [5, 3, 7, 10];

      expect(getActiveHours(activeHours)).toEqual(expectedOccurrences);
    });
  });
});