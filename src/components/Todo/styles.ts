import styled from 'styled-components';

export const TodoBackground = styled.main`
  background-color: ${({ theme }) => theme.colors.gray600};
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const TodoContainer = styled.section`
  max-width: 736px;
  width: 100%;
`;

export const AddTodo = styled.div`
  display: flex;
  gap: 0.5rem;
  position: relative;
  margin-top: -1.875rem;
  margin-bottom: 3rem;
`;

export const TaskListContainer = styled.section``;

export const TaskResume = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  p {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: ${({ theme }) => theme.weights.bold};
  }

  p:nth-child(2) {
    color: ${({ theme }) => theme.colors.purple};
  }

  span {
    padding: 0.2rem 0.5rem;
    padding: ${({ theme }) => theme.weights.bold};
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.gray100};
  }
`;

export const TaskList = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${({ theme }) => theme.colors.gray400};
  border-radius: ${({ theme }) => theme.sizes.lg};
  align-items: center;
  padding: 4rem;

  p {
    color: ${({ theme }) => theme.colors.gray300};
  }

  p:nth-child(2) {
    margin-top: 1rem;
    font-weight: ${({ theme }) => theme.weights.bold};
  }
`;

export const TaskItem = styled.li`
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.gray500};
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray100};

  img {
    width: 70px;
  }
`;

export const CheckBoxTask = styled.input.attrs({ type: 'checkbox' })`
  width: 45px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:checked {
    background-color: ${({ theme }) => theme.colors.purpleDark};
    border: 2px solid ${({ theme }) => theme.colors.purpleDark};
    position: relative;
  }

  &:checked::after {
    content: '✓';
    color: ${({ theme }) => theme.colors.gray100};
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:checked + p {
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

export const TrashIconWrapper = styled.div`
  svg {
    path {
      fill: inherit !important;
    }
  }
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.375rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  svg,
  img {
    fill: ${({ theme }) => theme.colors.gray300};
    transition: fill 0.2s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};

    svg,
    img {
      fill: ${({ theme }) => theme.colors.danger};
    }
  }
`;
