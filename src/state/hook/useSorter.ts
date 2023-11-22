import { useSetRecoilState } from "recoil";
import { resultOfSecretFriend } from "../atom";
import { holdDraw } from "../helpers/holdDraw";
import { useListOfParticipants } from "./useListOfParticipants";

export const useSorter = () => {
    const participants = useListOfParticipants();
    const setResult = useSetRecoilState(resultOfSecretFriend);
    return () => {
       const result = holdDraw(participants);
        setResult(result);       
    }
}