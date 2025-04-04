import styled from 'styled-components';

export const TodoBackground = styled.main`
  background-color: ${({ theme }) => theme.colors.gray600};
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 0 1rem;
`;

export const TodoContainer = styled.section`
  max-width: 736px;
  width: 100%;
  padding: 0 1rem;
`;

export const AddTodo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  margin-top: -1.875rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 3rem;
  }
`;

export const TaskListContainer = styled.section``;

export const TaskResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: ${({ theme }) => theme.weights.bold};
    font-size: 0.875rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  p:nth-child(2) {
    color: ${({ theme }) => theme.colors.purple};
  }

  span {
    margin-left: 0.5rem;
    padding: 0.125rem 0.5rem;
    background-color: ${({ theme }) => theme.colors.gray400};
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.gray100};
    font-size: 0.75rem;

    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

export const TaskList = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${({ theme }) => theme.colors.gray400};
  border-radius: ${({ theme }) => theme.sizes.lg};
  align-items: center;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem;
  }

  svg {
    width: 56px;
    height: auto;

    @media (min-width: 768px) {
      width: 70px;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.gray300};
    text-align: center;
    font-size: 0.875rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
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
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.gray100};
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

export const TaskItemContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  word-break: break-word;
  flex: 1;
  min-width: 0;

  p {
    font-size: 0.875rem;
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const CheckBoxTask = styled.input.attrs({ type: 'checkbox' })`
  min-width: 0.7rem;
  min-height: 0.7rem;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  transition: background-color 0.2s ease, border 0.2s ease;
  margin-top: 0.2rem;
  flex-shrink: 0;

  &:checked {
    background-color: ${({ theme }) => theme.colors.purpleDark};
    border-color: ${({ theme }) => theme.colors.purpleDark};
    position: relative;
  }

  &:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.gray100};
    font-size: 0.7rem;
    font-weight: bold;
  }

  &:checked + p {
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.gray300};
  }

  @media (min-width: 768px) {
    min-width: 1.125rem;
    min-height: 1.125rem;
  }
`;

export const TrashIconWrapper = styled.div`
  svg {
    width: 1.5rem;
    height: 1.5rem;

    path {
      fill: inherit !important;
    }
  }
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  svg {
    fill: ${({ theme }) => theme.colors.gray300};
    transition: fill 0.2s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};

    svg {
      fill: ${({ theme }) => theme.colors.danger};
    }
  }
`;
