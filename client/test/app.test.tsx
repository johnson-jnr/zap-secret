import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../pages/HomePage', () => ({
    default: () => <div data-testid="homepage" />,
}));

vi.mock('../pages/AboutPage', () => ({
    default: () => <div data-testid="aboutpage" />,
}));

// vi.mock('../pages/xyz', () => ({
//     default: () => <div data-testid="notfoundpage" />,
// }));

describe('App', () => {
    it('renders Home page on /', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>,
        );

        expect(screen.getByTestId('homepage')).toBeInTheDocument();
    });

    it('renders About Page on /about', async () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <App />
            </MemoryRouter>,
        );
        expect(screen.getByTestId('aboutpage')).toBeInTheDocument();
    });

    //  it('renders 404 Page', async () => {
    //      render(
    //         <MemoryRouter initialEntries={['/fzz']}>
    //             <RoutesConfig />
    //         </MemoryRouter>,
    //     );
    //     expect(screen.getByTestId('aboutpage')).toBeInTheDocument();
    // });
});
