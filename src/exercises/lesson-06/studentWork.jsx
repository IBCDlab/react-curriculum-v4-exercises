import { useState } from 'react';
import FilterButton from '../../components/FilterButton';
import TaskItem from '../../components/TaskItem';
import filterTasks from '../../utils/filterTasks';
import useTasks from '../../hooks/useTasks';
import UserProfile from '../../components/UserProfile';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTasks();

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile />
      <FilterButton
        text="All"
        filter="all"
        onFilterChange={handleFilterChange}
      />
      <FilterButton
        text="Completed"
        filter="completed"
        onFilterChange={handleFilterChange}
      />
      <FilterButton
        text="Pending"
        filter="pending"
        onFilterChange={handleFilterChange}
      />
      <p>Current filter: {filter}</p>
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
