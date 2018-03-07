import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const PackIt = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5e35b1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PackItTitle = styled.h1`
  font-family: 'Roboto Mono';
`;

const App = () => (
  <PackIt>
    <PackItTitle>Welcome to PackIt</PackItTitle>
  </PackIt>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
