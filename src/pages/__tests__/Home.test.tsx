import { vi, type Mock } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '../Home'
import userEvent from '@testing-library/user-event'
import * as githubApi from '../../services/githubApi'
import { MemoryRouter } from 'react-router-dom'

vi.mock('../../services/githubApi')

const mockUsers = [
    { login: 'octocat', avatar_url: 'https://github.com/octocat.png' },
]

describe('Home Page', () => {
    it('shows users after search', async () => {
        (githubApi.searchUsers as Mock).mockResolvedValue(mockUsers)

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )

        const input = screen.getByPlaceholderText(/enter github username/i)
        const button = screen.getByRole('button', { name: /search/i })

        await userEvent.type(input, 'octocat')
        await userEvent.click(button)

        await waitFor(() => {
            expect(screen.getByText((content) => content.includes('octocat'))).toBeInTheDocument()
        })
    })
})
