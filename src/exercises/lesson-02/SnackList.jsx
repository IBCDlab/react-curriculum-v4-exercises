export default function SnackList() {
  const snacks = [
    { name: 'Crispbreads', rank: 5 },
    { name: 'Peanut butter sandwich', rank: 4 },
    { name: 'Cheese', rank: 3 },
    { name: 'Dried fruits', rank: 2 },
    { name: 'Nuts', rank: 1 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <ol>
      {sortedSnacks.map((snack) => {
        return <li key={snack.name}>{snack.name}</li>;
      })}
    </ol>
  );
}
