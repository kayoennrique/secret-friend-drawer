import { useRecoilValue } from "recoil";
import { listParticipantsState } from "../atom";

export const useListOfParticipants = () => {
    return useRecoilValue(listParticipantsState);
}