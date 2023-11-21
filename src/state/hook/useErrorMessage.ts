import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useErrorMessage = () => {
    const mensagem = useRecoilValue(erroState)
    return mensagem;
}