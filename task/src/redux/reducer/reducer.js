import {
  ADD_USER_INFO,
  MONTH_DATA,
  GET_SUCCESSFUL_DATA,
  URL_CONFIRMATION,
  URL_RESULT,
} from "../actions/actionTypes";

const initialState = {
  urlConfirmation: false,
  urlResult: false,
  defaultMonth: 12,
  arrayOfMonths: [3, 6, 12],
  defaultGigabytes: 5,
  arrayOfGigabytes: [3, 5, 10, 20, 30, 50],
  errorShow: null,
  done: true,
  cardInfo: null,
  userInfo: null,
  err: null,
  choiceOfUser: null,
  arrUsers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_INFO:
      const newUser = {
        lastName: action.lastName,
        firstName: action.firstName,
        email: action.email,
        streetAddress: action.streetAddress,
      };
      const cardUser = {
        cardNumber: action.cardNumber,
        expirationDate: action.expirationDate,
        securityCode: action.securityCode,
      };
      const userRadioChoice = {
        quantityOfMonths: action.quantityOfMonths,
        amountOfGigabytes: action.amountOfGigabytes,
        upfrontPayment: action.upfrontPayment,
      };
      console.log(newUser, cardUser, userRadioChoice);
      return {
        ...state,
        cardInfo: cardUser,
        userInfo: newUser,
        choiceOfUser: userRadioChoice,
      };
    case MONTH_DATA: {
      return {
        ...state,
        defaultMonth: action.monthData,
      };
    }
    case GET_SUCCESSFUL_DATA: {
      console.log(action.data.data.json);
      return {
        ...state,
        arrUsers: [...state.arrUsers, action.data.data.json],
      };
    }
    case URL_CONFIRMATION: {
      console.log(action.data);
      return {
        ...state,
        urlConfirmation: action.data,
      };
    }
    case URL_RESULT: {
      return {
        ...state,
        urlConfirmation: action.data,
      };
    }
    default:
      return state;
  }
}
