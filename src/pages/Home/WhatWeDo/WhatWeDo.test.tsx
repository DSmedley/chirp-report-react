import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WhatWeDo from './WhatWeDo';

describe('<WhatWeDo />', () => {
  it('should mount', () => {
    render(<WhatWeDo />);
    
    const whatWeDo = screen.getByTestId('WhatWeDo');

    expect(whatWeDo).toBeInTheDocument();
  });
});