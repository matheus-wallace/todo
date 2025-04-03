import { AddTodo, TodoBackground, TodoContainer } from './styles';
import { InputTaskComponent } from '../InputTask/styles';
import ButtonWithIcon from '../ButtonWithIcon';
import addIcon from '../../assets/plus.svg';

const Todo = () => {
  return (
    <TodoBackground>
      <TodoContainer>
        <AddTodo>
          <InputTaskComponent placeholder="Adicione uma nova tarefa" />
          <ButtonWithIcon textButton="Criar" icon={addIcon} altIcon="plus icon" />
        </AddTodo>
      </TodoContainer>
    </TodoBackground>
  );
};

export default Todo;
