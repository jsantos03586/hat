import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hospital from './Hospital';

describe('<Hospital />', () => {
  test('it should mount', () => {
    render(<Hospital />);
    
    const hospital = screen.getByTestId('Hospital');

    expect(hospital).toBeInTheDocument();
  });
});