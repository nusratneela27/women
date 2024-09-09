// import { authKey } from "@/contants/authkey"
import { decodedToken } from "@/utils/jwt"
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    // console.log(accessToken);
    return setToLocalStorage("accessToken", accessToken)
}

export const getUserInfo = () => {
    const authToken = getFromLocalStorage("accessToken")
    // console.log(authToken);
    if (authToken) {
        const decodedData: any = decodedToken(authToken)
        // console.log(decodedData);
        return {
            ...decodedData,
            role: decodedData?.role.toLowerCase()
        }
    }
}

export const isLogin = () => {
    const authToken = getFromLocalStorage("accessToken")
    if (authToken) {
        return !!authToken
    }
}

export const removeUser = () => {
    return removeFromLocalStorage("accessToken");
};