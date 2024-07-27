import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Counter render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 0 } } });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  test('Increment', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 0 } } });

    await userEvent.click(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('Decrement', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 0 } } });

    await userEvent.click(screen.getByTestId('decrement-button'));

    expect(screen.getByTestId('counter-value')).toHaveTextContent('-1');
  });
});
