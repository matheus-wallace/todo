import { ButtonWithIconContainer } from './styles';

interface ButtonWithIconProps {
  textButton: string;
  icon: string;
  altIcon: string;
}

const ButtonWithIcon = ({ textButton, icon, altIcon }: ButtonWithIconProps) => {
  return (
    <ButtonWithIconContainer>
      {textButton}
      <img src={icon} alt={altIcon} />
    </ButtonWithIconContainer>
  );
};

export default ButtonWithIcon;
