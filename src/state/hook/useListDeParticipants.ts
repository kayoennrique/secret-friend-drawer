import { useRecoilValue } from "recoil";
import { listParticipantsState } from "../atom";

export const useListDeParticipants = () => {
    return useRecoilValue(listParticipantsState);
}