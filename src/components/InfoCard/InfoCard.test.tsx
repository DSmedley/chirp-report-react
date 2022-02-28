import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InfoCard from './InfoCard';
import InfoIcon from '@mui/icons-material/Info';

describe('<InfoCard />', () => {
  const title = 'Some Title';
  const description = 'this is the description';
  const icon = InfoIcon;
  it('should mount', () => {

    render(<InfoCard title={title} description={description} icon={icon} />);

    const infoCard = screen.getByTestId('InfoCard');

    expect(infoCard).toBeInTheDocument();
  });

  it('should contain the title from props', () => {
    render(<InfoCard title={title} description={description} icon={icon} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('should contain the description from props', () => {
    render(<InfoCard title={title} description={description} icon={icon} />);

    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should contain the icon from props', () => {
    render(<InfoCard title={title} description={description} icon={icon} />);

    const iconElement = screen.getByTestId('InfoIcon');
    expect(iconElement).toBeInTheDocument();
  });
});