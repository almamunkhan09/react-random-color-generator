/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import randomcolor from 'randomcolor';
import { useState } from 'react';

// Defining the custom style for the main component
const mainStyle = css`
  margin: auto;
  max-width: 500px;
  min-width: 400px;
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

// Define custom style for select hue and light
const selectHueLight = css`
  min-width: 80px;
  min-height: 30px;
  border-radius: 5px;
  background-color: #4c37b9;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

// Define the custom style for Submit button Component
const Button = styled.button`
  width: 200px;
  height: 50px;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  color: #130a42;
  background-color: #6bb679;
  margin-top: 20px;
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
  // Function that track the input color
  const trackColor = (event) => {
    setInputColor(event.currentTarget.value);
  };
  // Function that track Luminosity label
  const trackLuminosity = (event) => {
    setLuminosity(event.currentTarget.value);
  };
  // Function to change the background color on each submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputColor.luminosity);
    setColorHexCode(generateRandomColor(luminosity, inputColor).toUpperCase());
  };

  return (
    <div
      css={css`
        ${mainStyle};
        background-color: ${colorHexCode}; // Dynamic changing of background color
      `}
    >
      <h1> Generate Color: {colorHexCode}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Color:
          <select css={selectHueLight} onChange={trackColor}>
            <option value="">Default</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="Blue">Blue</option>
          </select>
        </div>
        <div>
          Luminosity:
          <select css={selectHueLight} onChange={trackLuminosity}>
            <option value="">Default</option>
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
