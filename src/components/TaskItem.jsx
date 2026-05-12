export default function TaskItems({ task }) {
  return (
    <li>
      {task.title} {task.completed ? '✅' : '⏳'}
    </li>
  );
}
