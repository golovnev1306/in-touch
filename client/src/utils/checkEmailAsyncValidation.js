import authApi from "../api/authApi";

const checkEmailAsyncValidation = ({email}) => {
    return authApi.checkEmail(email).then((result) => {
        console.log(result)
    }).catch(error => {
            throw {
                email: error.response.data.message || 'Возникла непредвиденная ошибка'
            }
    })
}

export default checkEmailAsyncValidation