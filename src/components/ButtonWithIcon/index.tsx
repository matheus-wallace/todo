import { ButtonWithIconContainer } from './styles';
import AddIcon from '../../assets/plus.svg';

interface ButtonWithIconProps {
  textButton: string;
}

const ButtonWithIcon = ({ textButton }: ButtonWithIconProps) => {
  return (
    <ButtonWithIconContainer>
      {textButton}
      <AddIcon />
    </ButtonWithIconContainer>
  );
};

export default ButtonWithIcon;
