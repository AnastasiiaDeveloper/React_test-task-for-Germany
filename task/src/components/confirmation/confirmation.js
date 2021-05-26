import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { thunkObjForData } from "./../../redux/actions/actions";
import "./confirmation.css";

const Confirmation = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState("");
  const [checkedAgree, setCheckedAgree] = useState(false);
  const user = useSelector((state) => state.userInfo);
  const card = useSelector((state) => state.cardInfo);
  const userChoice = useSelector((state) => state.choiceOfUser);
  const calculateTotalPrice = () => {
    const pricePerOneGB = 2;
    return (
      +userChoice.amountOfGigabytes *
      +userChoice.quantityOfMonths *
      +pricePerOneGB
    );
  };

  const willSendDataToEndPoint = () => {
    const obj = {
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      streetAddress: user.streetAddress,
      cardNumber: card.cardNumber,
      expirationDate: card.expirationDate,
      securityCode: card.securityCode,
      totalPrice,
      userChoice,
    };
    dispatch(thunkObjForData(obj));
    // console.log("sendData");
  };

  useEffect(() => {
    if (userChoice.upfrontPayment === "true") {
      setTotalPrice(calculateTotalPrice() * 0.9);
    } else {
      setTotalPrice(calculateTotalPrice);
    }
  }, []);

  return (
    <div>
      <p className="titleN">
        Check the entered information and make sure that everything is correct.
      </p>
      <p>
        Your full name is <span className="colortext">{user.firstName} {user.lastName}</span>.
      </p>
      <p>
        {" "}
        Email address:<span className="colortext">{user.email}</span>. Street address:<span className="colortext">{user.streetAddress}</span>.
      </p>
      <p>
        You have ordered <span className="colortext">{userChoice.amountOfGigabytes} gigabytes</span>  in the cloud
        for <span className="colortext">{userChoice.quantityOfMonths} months</span>.
      </p>
      <p>
        Your Card Number: <span className="colortext">{card.cardNumber}</span>. Card expiration date:{" "}
        <span className="colortext">{card.expirationDate}</span>. Card security code:<span className="colortext">{card.securityCode}</span>.
      </p>

      <p>Your order costs: <span className="colortext2">{totalPrice}$</span>.</p>

      <input
        type="checkbox"
        name="checkbox"
        defaultChecked={checkedAgree}
        onChange={() => setCheckedAgree(!checkedAgree)}
        
      />
      <label className="colortext3">
        {" "}
        I have read and agree to the Terms and Conditions and Privacy Policy
      </label>
       <div className="buttonBlock">
      <Link to="/">
        <button className="transBtn">Back</button>
      </Link>
      <Link to={checkedAgree ? "/result" : "/сonfirmation"}>
        <button
          onClick={willSendDataToEndPoint}
          className="transBtn1"
          disabled={checkedAgree ? "" : true}
        >
          Confirm
        </button>
      </Link>
      </div>
    </div>
  );
};
export default Confirmation;
