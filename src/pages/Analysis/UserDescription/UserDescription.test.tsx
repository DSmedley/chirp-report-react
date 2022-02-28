import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserDescription from './UserDescription';

describe('<UserDescription />', () => {
  const description = 'some description';
  it('should mount', () => {
    render(<UserDescription description={description}/>);

    const userDescription = screen.getByTestId('UserDescription');

    expect(userDescription).toBeInTheDocument();
  });
});