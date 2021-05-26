import {
  ADD_USER_INFO,
  MONTH_DATA,
  GET_SUCCESSFUL_DATA,
  URL_CONFIRMATION,
  URL_RESULT,
} from "./actionTypes.js";
import ApiServer from "./../../api/serverApi";

export function setMonthData(monthData) {
  return {
    type: MONTH_DATA,
    monthData,
  };
}

function getSuccessfulData(data) {
  return {
    type: GET_SUCCESSFUL_DATA,
    data,
  };
}

export function urlConfirmation(data) {
  return {
    type: URL_CONFIRMATION,
    data,
  };
}

export function urlResult(data) {
  return {
    type: URL_RESULT,
    data,
  };
}

export const thunkObjForData = (dataObj) => {
  return async (dispatch) => {
    const data = await ApiServer.addPost(dataObj);
    dispatch(getSuccessfulData(data));
  };
};

export function addUserInfo(
  lastName,
  firstName,
  email,
  streetAddress,
  cardNumber,
  expirationDate,
  securityCode,
  quantityOfMonths,
  amountOfGigabytes,
  upfrontPayment
) {
  return {
    type: ADD_USER_INFO,
    lastName,
    firstName,
    email,
    streetAddress,
    cardNumber,
    expirationDate,
    securityCode,
    quantityOfMonths,
    amountOfGigabytes,
    upfrontPayment,
  };
}
