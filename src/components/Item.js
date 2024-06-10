export function Item({ item, handleDeleteItem, onToggleItems }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => {
            onToggleItems(item.id);
          }}
        />

        {item.quantity}
        {item.description}
        <button onClick={() => handleDeleteItem(item.id)}>❌</button>
      </span>
    </li>
  );
}
