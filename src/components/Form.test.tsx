import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Form from "./Form";


describe('the behavior of Form.tsx', () => {
    test('when the input is empty, new participants cannot be added', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes');
        const button = screen.getByRole('button');
        expect(input).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    test('add a participant if a name is filled in', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes');
        const button = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        fireEvent.click(button);
        expect(input).toHaveFocus();
        expect(input).toHaveValue("");
    });
    
    test('Duplicate names cannot be added to the list', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes');
        const button = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        fireEvent.click(button);
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        fireEvent.click(button);
    
        const errorMessage = screen.getByRole('alert');
    
        expect(errorMessage.textContent).toBe('Nomes duplicados não são permitidos!');
    });
    
    test('the error message should disappear after the timers', () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes');
        const button = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        fireEvent.click(button);
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        });
        fireEvent.click(button);
        let errorMessage = screen.queryByRole('alert');
        expect(errorMessage).toBeInTheDocument();
    
        act(() => {
            jest.runAllTimers();
        });
    
        errorMessage = screen.queryByRole('alert');
        expect(errorMessage).toBeNull();
    });
});