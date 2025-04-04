import styled from 'styled-components';

export const ButtonWithIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ theme }) => theme.sizes.lg};
  background-color: ${({ theme }) => theme.colors.blueDark};
  color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0.5rem;
  border: none;
  font-weight: ${({ theme }) => theme.weights.bold};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    transition: 0.3s;
  }
`;
