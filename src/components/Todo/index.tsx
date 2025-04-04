import {
  AddTodo,
  CheckBoxTask,
  TaskItem,
  TaskItemContent,
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
import { useState } from 'react';

interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

  const updateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewTodoText(value);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)),
    );
  };

  const addNewTodo = () => {
    if (newTodoText.trim() === '') return;

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: crypto.randomUUID(),
        text: newTodoText,
        isCompleted: false,
      },
    ]);

    setNewTodoText('');
  };

  return (
    <TodoBackground>
      <TodoContainer>
        <AddTodo>
          <InputTaskComponent
            placeholder="Adicione uma nova tarefa"
            value={newTodoText}
            onChange={updateTodo}
            onKeyDown={(e) => e.key === 'Enter' && addNewTodo()}
          />
          <ButtonWithIcon textButton="Criar" disabled={!newTodoText.trim()} onClick={addNewTodo} />
        </AddTodo>
        <TaskListContainer>
          <TaskResume>
            <p>
              Tarefas criadas <span>{todos.length}</span>
            </p>
            <p>
              Concluídas <span>{todos.filter((todo) => todo.isCompleted).length}</span>
            </p>
          </TaskResume>
          {todos.length === 0 ? (
            <TaskList>
              <Clipboard />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </TaskList>
          ) : (
            <ul>
              {todos.map((todo, index) => (
                <TaskItem key={todo.id}>
                  <TaskItemContent>
                    <CheckBoxTask type="checkbox" onClick={() => toggleTodo(todo.id)} />
                    <p>{todo.text}</p>
                  </TaskItemContent>
                  <TrashButton
                    type="button"
                    aria-label="Remover tarefa"
                    onClick={() => setTodos(todos.filter((_, i) => i !== index))}
                  >
                    <TrashIconWrapper>
                      <TrashIcon />
                    </TrashIconWrapper>
                  </TrashButton>
                </TaskItem>
              ))}
            </ul>
          )}
        </TaskListContainer>
      </TodoContainer>
    </TodoBackground>
  );
};

export default Todo;
