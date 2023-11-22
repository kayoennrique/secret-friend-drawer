import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { useListDeParticipants } from "../state/hook/useListDeParticipants";

jest.mock('../state/hook/useListDeParticipants', () => {
    return {
        useListDeParticipants: jest.fn()
    }
});

const mockNavigation = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
});

describe('where there are not enough participants', () => {
    beforeEach(() => {
        (useListDeParticipants as jest.Mock).mockReturnValue([])
    });
    test('the game cannot be started', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );

        const button = screen.getByRole('button');
        expect(button).toBeDisabled()
    });
});

describe('when there are enough participants', () => {
    beforeEach(() => {
        (useListDeParticipants as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Florentina'])
    });
    test('the game can start', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );
        const button = screen.getByRole('button');
        expect(button).not.toBeDisabled()
    });
    test('the game started', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockNavigation).toHaveBeenCalledTimes(1);
        expect(mockNavigation).toHaveBeenCalledWith('/sorteio');
    });
});