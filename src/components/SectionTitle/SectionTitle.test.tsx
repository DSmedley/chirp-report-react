import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionTitle from './SectionTitle';

describe('<SectionTitle />', () => {
  const title = 'Some Title';
  it('should mount', () => {
    render(<SectionTitle title={title}/>);

    const sectionTitle = screen.getByTestId('SectionTitle');

    expect(sectionTitle).toBeInTheDocument();
  });
});