import { describe } from 'vitest';
import App from '../App';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { BrowserRouter, MemoryRouter, } from 'react-router-dom';

describe('Header component', () => {
  it('navigates home when you click HOME', async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    const homeButton = screen.getByRole('link', { name: 'HOME' });

    await user.click(homeButton);

    expect(screen.getByTitle('BASSBOOK')).toBeInTheDocument();
  });

  it('navigates to Shop when you click SHOP', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const shopButton = screen.getByRole('link', { name: 'SHOP' });

    await user.click(shopButton);

    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
  });
});
