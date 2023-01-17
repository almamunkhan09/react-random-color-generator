/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import randomcolor from 'randomcolor';
import { useState } from 'react';

// Defining the custom style for the main component
const mainStyle = css`
  margin: auto;
  max-width: 500px;
  min-width: 400;
  min-height: 400px;
  margin-top: 20px;
  padding: 10px;
  color: black;
  border: solid 1px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  transition: all 0.4s ease-in-out;
`;

const selectHueLight = css`
  min-width: 80px;
  min-height: 30px;
  border-radius: 5px;
  background-color: #4c37b9;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

// Define the custom style for Button Component
const Button = styled.button`
  width: 200px;
  height: 50px;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #130a42;
  background-color: #6bb679;

  border-radius: 50px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export default function Main() {
  // Intiate the background color as Hexcode
  const [colorHexCode, setColorHexCode] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [inputColor, setInputColor] = useState('');
  // Define a function that Generate color HexCode using randomcolor
  const generateRandomColor = (inputLuminosity = ' ', inputHue = ' ') => {
    return randomcolor({ luminosity: inputLuminosity, hue: inputHue });
  };
  // Function that track the change in the color input color at the time of state change
  const trackColor = (event) => {
    setInputColor(event.currentTarget.value);
  };
  const trackLuminosity = (event) => {
    setLuminosity(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setColorHexCode(generateRandomColor(inputColor, luminosity).toUpperCase());
  };
  return (
    <div
      css={css`
        ${mainStyle};
        background-color: ${colorHexCode};
      `}
    >
      <h1> Generate Color: {colorHexCode}</h1>
      {/* <Button className="button" onClick={changeColor}>
        Generate Color
      </Button> */}

      <form onSubmit={handleSubmit}>
        <div>
          Color:
          <select css={selectHueLight} onChange={trackColor}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="Blue">Blue</option>
          </select>
        </div>
        <div>
          Luminosity:
          <select css={selectHueLight} onChange={trackLuminosity}>
            <option value="light">Light</option>
            <option value="bright">Bright</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
