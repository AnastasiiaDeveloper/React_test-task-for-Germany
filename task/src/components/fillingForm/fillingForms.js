import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addUserInfo,
  setMonthData,
  urlConfirmation,
  urlResult,
} from "../../redux/actions/actions";
import CardInformation from "./cardInfo";
import UserData from "./userData";
import "./filling.css";


const FillingForm = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [errorEmptyField, setErrorEmptyField] = useState(false);
  const [quantityOfMonths, setQuantityOfMonths] = useState(12);
  const [amountOfGigabytes, setAmountOfGigabytes] = useState(5);
  const [upfrontPayment, setUpfrontPayment] = useState(false);
  const [btn, setBtn] = useState(false);

  const [errorStyles] = useState({
    ifNo: {
      display: "none",
      opacity: 0,
      position: "absolute",
      fontSize: "1.3em",
      marginLeft: "500px",
      marginTop: "0",
      background: "red",
      bordeRadius: "10px",
      color: "white",
      padding: "4px",
    },
    ifYes: {
      display: "block",
      position: "absolute",
      marginLeft: "500px",
      marginTop: "150",
      fontSize: "1.3em",
      transition: "2s",
      background: "red",
      bordeRadius: "10px",
      color: "white",
      padding: "4px",
    },
  });

  useEffect(() => {
    if (
      lastName.trim() === "" ||
      firstName.trim() === "" ||
      email.trim() === "" ||
      streetAddress.trim() === "" ||
      cardNumber.trim() === "" ||
      expirationDate.trim() === "" ||
      securityCode.trim() === ""
    ) {
      setBtn(true);
    } else {
      setBtn();
    }
  }, [
    lastName,
    firstName,
    email,
    streetAddress,
    cardNumber,
    expirationDate,
    securityCode,
  ]);

  const arrayOfMonths = useSelector((state) => state.arrayOfMonths);
  const defaultMonth = useSelector((state) => state.defaultMonth);
  const arrayOfGigabytes = useSelector((state) => state.arrayOfGigabytes);
  const defaultGigabytes = useSelector((state) => state.defaultGigabytes);
  const dispatch = useDispatch();

  const handler = (p1, p2, p3, p4, p5, p6, p7) => {
    if (
      p1.trim() === "" ||
      p2.trim() === "" ||
      p3.trim() === "" ||
      p4.trim() === "" ||
      p5.trim() === "" ||
      p6.trim() === "" ||
      p7.trim() === ""
    ) {
      console.log("error");
      setErrorEmptyField(true);
      setTimeout(() => {
        setErrorEmptyField(false);
      }, 3000);
    } else {
      dispatch(urlConfirmation(true));
      dispatch(urlResult(true));
      dispatch(
        addUserInfo(
          p1,
          p2,
          p3,
          p4,
          p5,
          p6,
          p7,
          quantityOfMonths,
          amountOfGigabytes,
          upfrontPayment
        )
      );
    }
  };

  const sendDataToRedux = () => {
    handler(
      lastName,
      firstName,
      email,
      streetAddress,
      cardNumber,
      expirationDate,
      securityCode
    );
  };

  const onChangeQuantityOfMonths = (event) => {
    setQuantityOfMonths(event.target.value);
  };

  const onChangeAmountOfGigabytes = (event) => {
    setAmountOfGigabytes(event.target.value);
  };

  const onChangeUpfrontPayment = (event) => {
    setUpfrontPayment(event.target.value);
  };

  useEffect(() => {
    dispatch(setMonthData(+quantityOfMonths));
  }, [quantityOfMonths]);
  useEffect(() => {
    setQuantityOfMonths(defaultMonth);
  }, []);

  const checkedMonth = arrayOfMonths.map((element, index) => {
    return (
      <React.Fragment key={`${index}month`}>
        <input
          type="radio"
          name="month"
          value={element}
          defaultChecked={element === defaultMonth ? true : false}
          className="radioBtn"
        />
        <label>{element}</label>
      </React.Fragment>
    );
  });

  const checkedGigabytes = arrayOfGigabytes.map((element, index) => {
    return (
      <React.Fragment key={`${index}amount`}>
        <input
          type="radio"
          name="amount"
          value={element}
          defaultChecked={element === defaultGigabytes ? true : false}
          className="radioBtn"
        />
        <label>{element}</label>
      </React.Fragment>
    );
  });

  return (
    <div className="part-for-input">
      <p className="title colortext">Select your plan:</p>

      <p style={errorEmptyField ? errorStyles.ifYes : errorStyles.ifNo}>
        {" "}
        You should fill all required fields
      </p>
      <div className="radio-button">
        <p>Duration: </p>
        <div className="radioButton" onChange={onChangeQuantityOfMonths}>
          {checkedMonth}{" "}
        </div>

        <div>
          {" "}
          <p> Amount of gigabytes in a cloud: </p>
        </div>
        <div className="radioButton" onChange={onChangeAmountOfGigabytes}>
          {checkedGigabytes}{" "}
        </div>

        <p> Upfront payment:</p>
        <div className="radioButton" onChange={onChangeUpfrontPayment}>
          <input
            type="radio"
            id="yes"
            name="upfront"
            value={true}
            className="radioBtn"
          ></input>
          <label>yes</label>
          <input
            type="radio"
            id="no"
            name="upfront"
            value={false}
            defaultChecked
            className="radioBtn"
          ></input>
          <label>no</label>
        </div>
      </div>
      <UserData
        lastName={lastName}
        setLastName={setLastName}
        firstName={firstName}
        setFirstName={setFirstName}
        email={email}
        setEmail={setEmail}
        streetAddress={streetAddress}
        setStreetAddress={setStreetAddress}
      />
      <CardInformation
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
      />
      <Link to={btn ? "/" : "/сonfirmation"} onClick={sendDataToRedux}>
        <div className="submit-button">
          <button className="btn" disabled={btn ? true : ""}>
            {" "}
            Next
          </button>
        </div>
      </Link>
    </div>
  );
};
export default FillingForm;
