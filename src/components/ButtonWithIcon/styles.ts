import styled from 'styled-components';

export const ButtonWithIconContainer = styled.button`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.lg};
  background-color: ${(props) => props.theme.colors.blueDark};
  color: ${(props) => props.theme.colors.gray100};
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => props.theme.colors.blueDark};
  color: ${(props) => props.theme.colors.gray100};
  font-weight: ${(props) => props.theme.weights.bold};
  cursor: pointer;

  img {
    margin-left: 0.5rem;
  }
`;
