import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PercentageChart from './PercentageChart';
import {RadialBarCustomLayerProps} from '@nivo/radial-bar';

describe('<PercentageChart />', () => {
  it('should mount', () => {
    const layer = ({ center }: RadialBarCustomLayerProps) => {
      return (
        <g transform={`translate(${center[0]}, ${center[1]})`}>
          <text
            textAnchor='middle'
            dominantBaseline='central'
            style={{
              fontSize: 35,
              fontWeight: 800,
              fill: '#eeeeee',
            }}
          >
            title
          </text>
        </g>
      );
    };
    
    render(<PercentageChart title='' percentage={0} customLayer={layer} />);
    
    const percentageChart = screen.getByTestId('PercentageChart');

    expect(percentageChart).toBeInTheDocument();
  });
});