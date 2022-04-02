import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserCard from './UserCard';

describe('<UserCard />', () => {
  it('should mount', () => {
    render(<UserCard screenName='' name=''/>);
    
    const userCard = screen.getByTestId('UserCard');

    expect(userCard).toBeInTheDocument();
  });

  it('should render each item in the list returned from useRecent', () => {
    const recentName = 'firstName';
    const recentScreenName = 'firstScreenName';

    render(<UserCard screenName={recentScreenName} name={recentName}/>);

    const userCard = screen.getByRole('img');
    expect(userCard).toHaveAttribute('alt', recentName);
    expect(userCard).toHaveAttribute('src', `https://unavatar.io/twitter/${recentScreenName}`);
  });
});