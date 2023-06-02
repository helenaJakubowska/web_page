import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootRouter from './Components/RootRouter/RootRouter';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: auto;
`;

function App() {
  return (
    <StyledApp>
      <RootRouter />
    </StyledApp>
  );
}

export default App;
