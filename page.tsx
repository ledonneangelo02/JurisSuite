import { useEffect, useState } from "react";
import { supabase } from "./src/lib/supabaseClient";

type Todo = {
  id: number;
  name: string;
};

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function loadTodos() {
      const { data, error } = await supabase.from("todos").select("*");

      if (error) {
        console.error(error);
        return;
      }

      setTodos(data ?? []);
    }

    loadTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
}