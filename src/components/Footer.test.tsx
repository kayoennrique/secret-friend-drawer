import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { useListOfParticipants } from "../state/hook/useListOfParticipants";

jest.mock('../state/hook/useListOfParticipants', () => {
    return {
        useListOfParticipants: jest.fn()
    }
});

const mockNavigation = jest.fn();
const mockSorter = jest.fn();

jest.mock('../state/hook/useSorter', () => {
    return {
        useSorter: () => mockSorter
    }
});

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
});

describe('where there are not enough participants', () => {
    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue([])
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
        (useListOfParticipants as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Florentina'])
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
        expect(mockSorter).toHaveBeenCalledTimes(1);
    });
});