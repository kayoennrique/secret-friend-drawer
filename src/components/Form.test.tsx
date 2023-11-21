import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Form from "./Form";


describe('o comportamento do Form.tsx', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');
        expect(input).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    test('adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
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
    
    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
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
    })
    
    test('a mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const button = screen.getByRole('button');
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
        fireEvent.click(button);
        fireEvent.change(input, {
            target: {
                value: 'Ana Catarina'
            }
        })
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