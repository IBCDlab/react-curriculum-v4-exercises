export default function FilterButton({ text, filter, onFilterChange }) {
  return <button onClick={() => onFilterChange(filter)}>{text}</button>;
}
