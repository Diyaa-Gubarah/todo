import { TodoContextValue, useTodoContext } from "../context/TodoContext";

const useTodos = (): TodoContextValue => {
    const context = useTodoContext();
    return context;
};

export default useTodos;
