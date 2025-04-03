import styled from 'styled-components';

export const TodoBackground = styled.main`
  background-color: ${({ theme }) => theme.colors.gray600};
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const TodoContainer = styled.section`
  max-width: 736px;
`;

export const AddTodo = styled.div`
  display: flex;
  gap: 0.5rem;
  position: relative;
  margin-top: -1.875rem;
`;
