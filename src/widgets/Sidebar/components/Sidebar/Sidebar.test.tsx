import { fireEvent, screen } from '@testing-library/react';
import { testWithTranslation } from 'shared/lib/testWithTransation/testWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Sidebar render', () => {
    testWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar collapsed', () => {
    testWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();

    const toggleButton = screen.getByTestId('sidebar-toggle-button');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
