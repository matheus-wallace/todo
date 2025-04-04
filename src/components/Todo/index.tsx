import {
  AddTodo,
  CheckBoxTask,
  TaskItem,
  TaskList,
  TaskListContainer,
  TaskResume,
  TodoBackground,
  TodoContainer,
  TrashButton,
  TrashIconWrapper,
} from './styles';
import { InputTaskComponent } from '../InputTask/styles';
import ButtonWithIcon from '../ButtonWithIcon';

import Clipboard from '../../assets/Clipboard.svg';
import TrashIcon from '../../assets/trash.svg';

const Todo = () => {
  return (
    <TodoBackground>
      <TodoContainer>
        <AddTodo>
          <InputTaskComponent placeholder="Adicione uma nova tarefa" />
          <ButtonWithIcon textButton="Criar" />
        </AddTodo>
        <TaskListContainer>
          <TaskResume>
            <p>
              Tarefas criadas <span>0</span>
            </p>
            <p>
              Concluídas <span>0</span>
            </p>
          </TaskResume>
          <TaskList>
            <Clipboard />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </TaskList>
          <TaskItem>
            <CheckBoxTask type="checkbox" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus accusamus asperiores, vitae
              consequuntur vel architecto, sequi aspernatur facilis ratione expedita error qui. Vel nemo quasi doloribus
              rerum. Libero, nulla.
            </p>
            <TrashButton type="button">
              <TrashIconWrapper>
                <TrashIcon />
              </TrashIconWrapper>
            </TrashButton>
          </TaskItem>
        </TaskListContainer>
      </TodoContainer>
    </TodoBackground>
  );
};

export default Todo;
