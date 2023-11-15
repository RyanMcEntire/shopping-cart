import { describe } from 'vitest';
import App from '../App';
import About from '../components/About';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { BrowserRouter, MemoryRouter, RouterProvider } from 'react-router-dom';



describe('Header component', () => {
  it('navigates home when you click HOME', async () => {
    
    render(<App />, {wrapper: BrowserRouter});
    const user = userEvent.setup();
    const homeButton = screen.getByRole('link', { name: 'HOME' });

    await user.click(homeButton);

    expect(screen.getByTitle('BASSBOOK')).toBeInTheDocument();
  });

  it('navigates to About when you click ABOUT', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();
  
    const aboutButton = screen.getByRole('link', { name: 'ABOUT' });

    await user.click(aboutButton);

    expect(screen.getByText(/About/i)).toBeInTheDocument();
    screen.debug();
  });
});
