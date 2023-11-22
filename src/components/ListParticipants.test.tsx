import { render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { useListOfParticipants } from '../state/hook/useListOfParticipants'
import ListParticipants from './ListParticipants'

jest.mock('../state/hook/useListOfParticipants', () => {
    return {
        useListOfParticipants: jest.fn()
    }
});

describe('an empty list of participants', () => {
    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue([])
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
        (useListOfParticipants as jest.Mock).mockReturnValue(participants)
    })
    test('must be rendered without elements', () => {
        render(<RecoilRoot>
            <ListParticipants />
        </RecoilRoot>);
    
        const items = screen.queryAllByRole('listitem');
        expect(items).toHaveLength(participants.length);
    });
});