import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Mentions from './Mentions';
import {Mention} from '../model/Mention';

describe('<Mentions />', () => {
  it('should mount', () => {
    render(<Mentions mentions={[]}/>);
    
    const mentions = screen.getByTestId('Mentions');

    expect(mentions).toBeInTheDocument();
  });

  it('should render each item in the list returned from useRecent', () => {
    const mention1 = new Mention(1, 'firstName', 5);
    const mention2 = new Mention(2, 'secondName', 9);
    const mentions = [mention1, mention2];

    render(<Mentions mentions={mentions}/>);

    const allMentions = screen.getAllByTestId('UserCard');
    expect(allMentions.length).toEqual(2);
  });
});