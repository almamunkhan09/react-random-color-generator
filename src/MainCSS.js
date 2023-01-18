/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Defining the custom style for the main component
const body = css`
  margin: 0;
  padding: 0;
  min-width: 400px;
  min-height: 400px;
  max-width: 500px;
  max-height: 500px;
  border: solid 2px;
  color: black;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  transition: all 0.4s ease-in-out;
  height: 100vh;
  background-color: gray;
`;

const generate = css`
  margin: auto;
  padding: 20px;
  max-width: 300px;
  min-height: 50px;
  border-radius: 20px;
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

export { body, Button, generate, selectHueLight };
