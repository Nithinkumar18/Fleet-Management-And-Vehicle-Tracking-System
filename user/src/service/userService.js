const user = require('./model/user');
const logger = require('./loggers/logger');
const responseInfo = require('./constants/responseInfo');


const registerUser = async (_user) => {

    try {
        const _newUser = await user.create(_user);

        logger.info(`SERVICE - ${responseInfo.SERVICE} : ${responseInfo.USER_REGESTRATION_SUCCESS}`);
        logger.info(`Created User Info ${_newUser._id}: created At: ${_newUser.createdAT}`);
        return {
            user_id: _newUser._id,
        }
    }
    catch (err) {
        logger.error(`SERVICE - ${responseInfo.SERVICE} : ${responseInfo.USER_REGESTRATION_FAIL}`);
        throw new Error(responseInfo.USER_REGESTRATION_FAIL);
    }

}

const updateUser = async (user_id, updateInfo) => {
    try {
        const updatedUserData = await user.findByIdAndUpdate({ '_id': user_id }, { $set: updateInfo });
        const { updatedAt, _id } = updatedUserData;
        logger.info(`SERVICE - ${responseInfo.SERVICE} : ${responseInfo.USER_UPDATE_SUCCESS}`);
        logger.info(`USER ${_id} INFO updated at ${updatedAt}`);
        return {
            userId: _id,
            updatedAt: updatedAt
        }
    }
    catch (err) {
        logger.error(`SERVICE - ${responseInfo.SERVICE} : ${responseInfo.USER_UPDATE_FAIL}`);
        throw new Error(responseInfo.USER_UPDATE_FAIL);
    }
}


const deleteUser = async (id) => {
    try {

        const user_rm = await user.findByIdAndDelete(id);
        if (user_rm) {
            logger.info(`SERVICE - ${responseInfo.SERVICE} : ${responseInfo.USER_DEACTIVATION_SUCCESS}`);
            logger.info(`User With Id ${user_rm._id} Deactivated`);
            return {
                userId: user_rm._id
            }
        }
    }
    catch (err) {
        logger.error(`SERVICE - ${responseInfo.SERVICE} : ${responseInfo.USER_NOT_FOUND}`);
        throw new Error(responseInfo.USER_NOT_FOUND);
    }
}


module.exports = {
    registerUser,
    updateUser,
    deleteUser
}