import styled from 'styled-components';

export const InputTaskComponent = styled.input`
  padding: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.gray300};
  border: 2px solid ${({ theme }) => theme.colors.gray700};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  font-weight: ${({ theme }) => theme.weights.bold};

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
