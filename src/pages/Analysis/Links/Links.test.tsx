import React from 'react';
import {render, screen, within} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Links from './Links';
import {UserLink} from '../model/UserLink';

describe('<Links />', () => {
  it('should mount', () => {
    render(<Links links={[]}/>);
    
    const links = screen.getByTestId('Links');

    expect(links).toBeInTheDocument();
  });

  it('should render each link in the array with a tooltip of the usage', () => {
    const links = [
      new UserLink(1, 'https://some.url', 2),
      new UserLink(2, 'https://some1.url', 1),
      new UserLink(3, 'https://some2.url', 3)
    ];
    
    render(<Links links={links}/>);

    const boxRef = screen.getByTestId('url-box');

    expect(within(boxRef).getAllByRole('link').length).toEqual(3);
    expect(within(boxRef).getAllByRole('link')[0]).toHaveAttribute('href', links[0].url);
    expect(within(boxRef).getAllByRole('link')[0]).toHaveAttribute('aria-label', `Used ${links[0].occurs} time(s)`);
    expect(within(boxRef).getAllByRole('link')[0].textContent).toEqual(links[0].url);
    expect(within(boxRef).getAllByRole('link')[1]).toHaveAttribute('href', links[1].url);
    expect(within(boxRef).getAllByRole('link')[1]).toHaveAttribute('aria-label', `Used ${links[1].occurs} time(s)`);
    expect(within(boxRef).getAllByRole('link')[1].textContent).toEqual(links[1].url);
    expect(within(boxRef).getAllByRole('link')[2]).toHaveAttribute('href', links[2].url);
    expect(within(boxRef).getAllByRole('link')[2]).toHaveAttribute('aria-label', `Used ${links[2].occurs} time(s)`);
    expect(within(boxRef).getAllByRole('link')[2].textContent).toEqual(links[2].url);
  });
});