export function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((items) => items.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  if (!items.length)
    return (
      <footer className="stats">
        <em>"Start adding items!"</em>
      </footer>
    );

  return (
    <footer className="stats">
      {percentage === 100
        ? "All items packed!"
        : `You have ${numItems} items on your list, you already packed ${packedItems}
    %${percentage};`}
    </footer>
  );
}
