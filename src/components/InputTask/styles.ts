import styled from 'styled-components';

export const InputTaskComponent = styled.input`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray700};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  font-weight: ${({ theme }) => theme.weights.regular};
  font-size: 1rem;
  transition: all 0.2s ease;
  box-sizing: border-box;
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.purple};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purpleDark};
  }

  &:hover:not(:focus) {
    border-color: ${({ theme }) => theme.colors.gray600};
  }

  @media (max-width: 480px) {
    padding: 0.875rem;
    font-size: 0.9375rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 1.125rem;
  }

  @media (min-width: 769px) {
    width: 100%;
    font-size: 1.125rem;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
