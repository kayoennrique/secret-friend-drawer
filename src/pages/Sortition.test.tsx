import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListOfParticipants } from "../state/hook/useListOfParticipants";
import Sortition from "./Sortition";
import { useDrawResult } from "../state/hook/useDrawResult";

jest.mock('../state/hook/useListOfParticipants', () => {
    return {
        useListOfParticipants: jest.fn()
    }
});
jest.mock('../state/hook/useDrawResult', () => {
    return {
        useDrawResult: jest.fn()
    }
});

describe('on the page Sortition', () => {
    const participants = [
        'Ana',
        'Catarina',
        'Jorel'
    ];
    const result = new Map([
        ['Ana', 'Jorel'],
        ['Jorel', 'Catarina'],
        ['Catarina', 'Ana']
    ]);

    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue(participants);
        (useDrawResult as jest.Mock).mockReturnValue(result);
    });
    test('all participants can show off their secret friend', () => {
        render(<RecoilRoot>
            <Sortition />
        </RecoilRoot>)

        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(participants.length + 1)
    });
    test('Secret Santa is displayed when requested', () => {
        render(<RecoilRoot>
            <Sortition />
        </RecoilRoot>);

        const select = screen.getByPlaceholderText('Selecione o seu nome')
        
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        });

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const secretFriend = screen.getByRole('alert');

        expect(secretFriend).toBeInTheDocument();

    });
    test('esconde o amigo secreto sorteado depois de 5 segundos', async () => {
        jest.useFakeTimers();

        render(
            <RecoilRoot>
                <Sortition />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText('Selecione o seu nome')        
        fireEvent.change(select, {target: {value: participants[0]}
        });

        const button = screen.getByRole('button');
        fireEvent.click(button);
        act(() => {
            jest.runAllTimers();
        });
    });
});