import React, { useEffect, useState } from "react";

function LuhnValidator(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const luhnCheck = (num) => {
      let sum = 0;
      let isSecond = false;
      for (let i = num.length - 1; i >= 0; i--) {
        let digit = parseInt(num.charAt(i));
        if (isSecond) {
          digit *= 2;
        }
        sum += digit > 9 ? digit - 9 : digit;
        isSecond = !isSecond;
      }
      return sum % 10 === 0;
    };
    setIsValid(luhnCheck(cardNumber));
  }, [cardNumber]);

  // luhnCheck(1234567890123456);
  // luhnCheck(4408041234567893);
  // luhnCheck(38520000023237);
  // luhnCheck(4222222222222);

  return (
    <div>
      <form>
        <label>
          Credit Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
      </form>
      {isValid === true ? <p>Card is valid</p> : null}
      {isValid === false ? <p>Card is not valid</p> : null}
    </div>
  );
}

export default LuhnValidator;
