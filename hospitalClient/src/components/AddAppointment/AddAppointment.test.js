import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddAppointment from './AddAppointment';

describe('<AddAppointment />', () => {
  test('it should mount', () => {
    render(<AddAppointment />);
    
    const addAppointment = screen.getByTestId('AddAppointment');

    expect(addAppointment).toBeInTheDocument();
  });
});