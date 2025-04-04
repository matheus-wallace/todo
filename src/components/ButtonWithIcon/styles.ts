import styled from 'styled-components';

export const ButtonWithIconContainer = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ theme }) => theme.sizes.lg};
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.gray500 : theme.colors.blueDark)};

  color: ${({ theme }) => theme.colors.gray100};
  border-radius: 0.5rem;
  border: none;
  font-weight: ${({ theme }) => theme.weights.bold};
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    background-color: ${({ theme, disabled }) => (disabled ? theme.colors.gray500 : theme.colors.blue)};
    transition: 0.3s;
  }
`;
