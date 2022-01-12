import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListAppointments from './ListAppointments';

describe('<ListAppointments />', () => {
  test('it should mount', () => {
    render(<ListAppointments />);
    
    const listAppointments = screen.getByTestId('ListAppointments');

    expect(listAppointments).toBeInTheDocument();
  });
});