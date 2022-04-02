import React from 'react';
import {render, screen, within} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hashtags from './Hashtags';
import {Hashtag} from '../model/Hashtag';

describe('<Hashtags />', () => {
  it('should mount', () => {
    render(<Hashtags hashtags={[]}/>);
    
    const hashtags = screen.getByTestId('Hashtags');

    expect(hashtags).toBeInTheDocument();
  });

  it('should render each hashtag in the array with a tooltop of the usage', () => {
    const hashtags = [
      new Hashtag(0, 'hashtag1', 5),
      new Hashtag(1, 'hashtag2', 1),
      new Hashtag(2, 'hashtag3', 7)
    ];

    render(<Hashtags hashtags={hashtags}/>);

    const hashtagBoxRef = within(screen.getByTestId('hashtag-box')).getAllByTestId('hashtag');

    expect(hashtagBoxRef.length).toEqual(3);
    expect(hashtagBoxRef[0]).toHaveAttribute('aria-label', `Used ${hashtags[0].occurs} time(s)`);
    expect(hashtagBoxRef[0].textContent).toEqual(`#${hashtags[0].hashtag}`);
    expect(hashtagBoxRef[1]).toHaveAttribute('aria-label', `Used ${hashtags[1].occurs} time(s)`);
    expect(hashtagBoxRef[1].textContent).toEqual(`#${hashtags[1].hashtag}`);
    expect(hashtagBoxRef[2]).toHaveAttribute('aria-label', `Used ${hashtags[2].occurs} time(s)`);
    expect(hashtagBoxRef[2].textContent).toEqual(`#${hashtags[2].hashtag}`);
    expect(screen.queryByTestId('empty-hashtag')).not.toBeInTheDocument();
  });

  it('should render a message if hashtag array is empty', () => {
    render(<Hashtags hashtags={[]}/>);

    expect(screen.getByTestId('empty-hashtag')).toBeInTheDocument();
    expect(screen.queryByTestId('hashtag')).not.toBeInTheDocument();
  });
});