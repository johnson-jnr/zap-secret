import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import UserEvent from '@testing-library/user-event';

describe('HomePage', () => {
    it('renders an input field for secret entry', () => {
        render(<HomePage />);
        const input = screen.getByTestId('secret-input');
        expect(input).toBeInTheDocument();
    });

    it('generate secret link url after submission', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValue({
            ok: true,
            json: async () => ({ id: 'abc123' }),
        } as Response);

        const userEvent = UserEvent.setup();

        render(<HomePage />);

        const input = screen.getByTestId('secret-input');
        await userEvent.type(input, 'secret');

        const button = screen.getByTestId('submit-btn');
        await userEvent.click(button);

        const link = await screen.findByText(/\/s\/abc123/i);
        expect(link).toBeInTheDocument();

        vi.restoreAllMocks();
    });
});
