import authApi from "../api/authApi";

const checkEmailAsyncValidation = ({email}) => {
    return authApi.checkEmail(email).catch(error => {
            throw {
                email: error.response?.data.message || "Возникла непредвиденная ошибка, проверьте соединение"
            }
    })
}

export default checkEmailAsyncValidation