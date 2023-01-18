/** @jsxImportSource @emotion/react */

// Import Packages

import { css } from '@emotion/react';
import randomcolor from 'randomcolor';
import { useState } from 'react';
// import Constants for css styles
import { body, Button, generate, selectHueLight } from './MainCSS';

export default function Main() {
  // Intiate the background color as Hexcode
  const [colorHexCode, setColorHexCode] = useState('#343f71');
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
    setColorHexCode(generateRandomColor(luminosity, inputColor));
  };

  return (
    <div
      css={css`
        ${body};
      `}
    >
      <div
        css={css`
          ${generate};
          background-color: ${colorHexCode};
        `}
      >
        Generated Color: {colorHexCode}
      </div>
      <div>
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
          <Button type="submit">Generate</Button>
        </form>
      </div>
    </div>
  );
}
