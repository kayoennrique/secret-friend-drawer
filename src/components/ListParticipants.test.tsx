import { render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { useListDeParticipants } from '../state/hook/useListDeParticipants'
import ListParticipants from './ListParticipants'

jest.mock('../state/hook/useListDeParticipants', () => {
    return {
        useListDeParticipants: jest.fn()
    }
});

describe('an empty list of participants', () => {
    beforeEach(() => {
        (useListDeParticipants as jest.Mock).mockReturnValue([])
    });
    test('deve ser renderizada sem elementos', () => {
        render(<RecoilRoot>
            <ListParticipants />
        </RecoilRoot>);
    
        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(0);
    });
});

describe('a completed list of participants', () => {
    const participants = ['Ana', 'Catarina']
    beforeEach(() => {
        (useListDeParticipants as jest.Mock).mockReturnValue(participants)
    })
    test('must be rendered without elements', () => {
        render(<RecoilRoot>
            <ListParticipants />
        </RecoilRoot>);
    
        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(participants.length);
    });
});