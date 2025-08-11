import { useState } from "react";
const initialItems = [
  { id: 1, description: "Fishing rod", quantity: 2, packed: false },
  { id: 2, description: "Hooks", quantity: 12, packed: false },
  { id: 3, description: "Fishing line", quantity: 7, packed: true },
  { id: 4, description: "Jig lures", quantity: 4, packed: true },
  { id: 5, description: "Assist hooks", quantity: 4, packed: false },
];
export default function App() {
  const [initialItemsState, setInitialItemsState] = useState(initialItems);
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🐳 What do you need for your fishing trip?✈️</h1>
    </div>
  );
}

function Form({ initialItemss }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSumbit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    //set default after submit
    setDescription("");
    setQuantity(1);
    console.log(initialItemss);
  }

  return (
    <form className="add-form" onSubmit={handleSumbit}>
      <h3>What do you need for your fishing trip? 🫵</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value * 1)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span>{item.quantity}</span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list and you already packed X (x%)</em>
    </footer>
  );
}
