import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listParticipantsState } from "../atom"

export const useAddParticipant = () => {
    const setList = useSetRecoilState(listParticipantsState)
    const list = useRecoilValue(listParticipantsState)
    const setErro = useSetRecoilState(erroState)
    return (nameOfParticipant: string) => {
        if (list.includes(nameOfParticipant)) {
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        }
        return setList(currentList => [...currentList, nameOfParticipant])
    }
}