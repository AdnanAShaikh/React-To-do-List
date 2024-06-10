import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const storedItems = localStorage.getItem("items");

  const [items, setItems] = useState(
    !storedItems ? [] : JSON.parse(storedItems)
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearAll() {
    const confirmed = window.confirm("Clear ALL ITEMS??");
    if (confirmed) setItems([]);
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        onToggleItems={toggleItem}
        handleClearAll={handleClearAll}
      />
      <Stats items={items} />
    </div>
  );
}
