import styled from 'styled-components';
import Header from './components/Header';
import Todo from './components/Todo';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Todo />
    </AppContainer>
  );
}

export default App;
