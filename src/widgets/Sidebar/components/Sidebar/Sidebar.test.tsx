import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Sidebar render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar opened', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

    const toggleButton = screen.getByTestId('sidebar-toggle-button');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('sidebar__container');
  });
});
