import { vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../SearchBar'

describe('SearchBar', () => {
    it('calls onSearch with input value', () => {
        const mockSearch = vi.fn()
        render(<SearchBar onSearch={mockSearch} />)

        const input = screen.getByPlaceholderText(/github/i)
        const button = screen.getByRole('button', { name: /search/i })

        fireEvent.change(input, { target: { value: 'octocat' } })
        fireEvent.click(button)

        expect(mockSearch).toHaveBeenCalledWith('octocat')
    })
})
