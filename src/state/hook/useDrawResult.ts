import { useRecoilValue } from "recoil";
import { resultOfSecretFriend } from "../atom";

export const useDrawResult = () => {
    return useRecoilValue(resultOfSecretFriend);
}