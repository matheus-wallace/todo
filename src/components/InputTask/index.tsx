import { InputTaskComponent } from './styles';

const InputTask = () => {
  return <InputTaskComponent type="text" onFocus={() => console.log('Input focado')} />;
};

export default InputTask;
