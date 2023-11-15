// import { describe } from 'vitest';
// import App from './App';
// import { render, screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
// import { MemoryRouter } from 'react-router-dom';

// describe('Header component', () => {
//   it('navigates home when you click HOME', async () => {
//     const user = userEvent.setup();
//     render(
//       <MemoryRouter initialEntries={['/about', '/']}>
//         <App />
//       </MemoryRouter>
//     );
//     const homeButton = screen.getByRole('link', { name: 'HOME' });

//     await user.click(homeButton);

//     expect(screen.getByTitle('BASSBOOK')).toBeInTheDocument();
//   });

//   it('navigates to About when you click ABOUT', async () => {
//     const user = userEvent.setup();
//     render(
//       <MemoryRouter initialEntries={['/about', '/']}>
//         <App />
//       </MemoryRouter>
//     );
//     const aboutButton = screen.getByRole('link', { name: 'ABOUT' });

//     await user.click(aboutButton);

//     expect(screen.getByTitle('BASSBOOK')).toBeInTheDocument();
//   });
// });
