import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActiveHours, {getActiveHours} from './ActiveHours';
import {Hour} from '../model/Hour';
import {ActiveHour} from './model/ActiveHour';

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

      const expectedActiveHours = [
        new ActiveHour('12am', 5),
        new ActiveHour('1am', 0),
        new ActiveHour('2am', 3),
        new ActiveHour('3am', 0),
        new ActiveHour('4am', 0),
        new ActiveHour('5am', 7),
        new ActiveHour('6am', 0),
        new ActiveHour('7am', 0),
        new ActiveHour('8am', 0),
        new ActiveHour('9am', 10),
        new ActiveHour('10am', 0),
        new ActiveHour('11am', 0),
        new ActiveHour('12pm', 0),
        new ActiveHour('1pm', 0),
        new ActiveHour('2pm', 0),
        new ActiveHour('3pm', 0),
        new ActiveHour('4pm', 0),
        new ActiveHour('5pm', 0),
        new ActiveHour('6pm', 0),
        new ActiveHour('7pm', 0),
        new ActiveHour('8pm', 0),
        new ActiveHour('9pm', 0),
        new ActiveHour('10pm', 0),
        new ActiveHour('11pm', 0)
      ];

      expect(getActiveHours(activeHours)).toEqual(expectedActiveHours);
    });
    it('should not add any 0 occurrences when all hours exist', () => {
      const activeHours = [
        new Hour(0, 5),
        new Hour(1, 3),
        new Hour(2, 7),
        new Hour(3, 10),
        new Hour(4, 10),
        new Hour(5, 10),
        new Hour(6, 10),
        new Hour(7, 10),
        new Hour(8, 10),
        new Hour(9, 10),
        new Hour(10, 10),
        new Hour(11, 10),
        new Hour(12, 10),
        new Hour(13, 10),
        new Hour(14, 10),
        new Hour(15, 10),
        new Hour(16, 10),
        new Hour(17, 10),
        new Hour(18, 10),
        new Hour(19, 10),
        new Hour(20, 10),
        new Hour(21, 10),
        new Hour(22, 10),
        new Hour(23, 10)
      ];

      const expectedActiveHours = [
        new ActiveHour('12am', 5),
        new ActiveHour('1am', 3),
        new ActiveHour('2am', 7),
        new ActiveHour('3am', 10),
        new ActiveHour('4am', 10),
        new ActiveHour('5am', 10),
        new ActiveHour('6am', 10),
        new ActiveHour('7am', 10),
        new ActiveHour('8am', 10),
        new ActiveHour('9am', 10),
        new ActiveHour('10am', 10),
        new ActiveHour('11am', 10),
        new ActiveHour('12pm', 10),
        new ActiveHour('1pm', 10),
        new ActiveHour('2pm', 10),
        new ActiveHour('3pm', 10),
        new ActiveHour('4pm', 10),
        new ActiveHour('5pm', 10),
        new ActiveHour('6pm', 10),
        new ActiveHour('7pm', 10),
        new ActiveHour('8pm', 10),
        new ActiveHour('9pm', 10),
        new ActiveHour('10pm', 10),
        new ActiveHour('11pm', 10)
      ];

      expect(getActiveHours(activeHours)).toEqual(expectedActiveHours);
    });
    it('should not add an hour higher than 23', () => {
      const activeHours = [
        new Hour(0, 5),
        new Hour(2, 3),
        new Hour(5, 7),
        new Hour(9, 8),
        new Hour(24, 10),
      ];

      const expectedActiveHours = [
        new ActiveHour('12am', 5),
        new ActiveHour('1am', 0),
        new ActiveHour('2am', 3),
        new ActiveHour('3am', 0),
        new ActiveHour('4am', 0),
        new ActiveHour('5am', 7),
        new ActiveHour('6am', 0),
        new ActiveHour('7am', 0),
        new ActiveHour('8am', 0),
        new ActiveHour('9am', 8),
        new ActiveHour('10am', 0),
        new ActiveHour('11am', 0),
        new ActiveHour('12pm', 0),
        new ActiveHour('1pm', 0),
        new ActiveHour('2pm', 0),
        new ActiveHour('3pm', 0),
        new ActiveHour('4pm', 0),
        new ActiveHour('5pm', 0),
        new ActiveHour('6pm', 0),
        new ActiveHour('7pm', 0),
        new ActiveHour('8pm', 0),
        new ActiveHour('9pm', 0),
        new ActiveHour('10pm', 0),
        new ActiveHour('11pm', 0)
      ];

      expect(getActiveHours(activeHours)).toEqual(expectedActiveHours);
    });
  });
});