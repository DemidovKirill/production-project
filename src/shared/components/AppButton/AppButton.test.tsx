import { render, screen } from '@testing-library/react';
import AppButton, { ButtonAppearance } from 'shared/components/AppButton/AppButton';

describe('AppButton', () => {
  test('AppButton render', () => {
    render(<AppButton />);

    expect(screen.getByText('Test AppButton')).toBeInTheDocument();
  });

  test('AppButton clear appearance', () => {
    render(<AppButton appearance={[ButtonAppearance.CLEAR]} />);

    expect(screen.getByText('Test AppButton')).toHaveClass(ButtonAppearance.CLEAR);
  });
});
