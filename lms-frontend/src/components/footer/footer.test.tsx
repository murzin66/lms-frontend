import { render, screen } from '@testing-library/react';

import Footer from './footer';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: footer', () => {

  it('should render "Footer" ', () => {

    const {withStoreComponent} = withStore(<Footer />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const expectedNavBarTestId = 'navigation-bar';

    const expectedTestId = screen.getByTestId(expectedNavBarTestId);

    expect (expectedTestId).toBeInTheDocument();
    expect(screen.getByText(/2025 Система управления обучением. Все права защищены./)).toBeInTheDocument();
  });
});