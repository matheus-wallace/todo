import { ButtonWithIconContainer } from './styles';
import AddIcon from '../../assets/plus.svg';

interface ButtonWithIconProps {
  textButton: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonWithIcon = ({ textButton, disabled, onClick }: ButtonWithIconProps) => {
  return (
    <ButtonWithIconContainer type="button" disabled={disabled} onClick={onClick}>
      {textButton}
      <AddIcon />
    </ButtonWithIconContainer>
  );
};

export default ButtonWithIcon;
