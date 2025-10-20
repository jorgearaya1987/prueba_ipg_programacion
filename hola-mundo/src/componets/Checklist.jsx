import { useState } from "react";

export default function Chechlist() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  const agregar = () => {
    const titulo = texto.trim();
    if (!titulo) return;
    setTareas((prev) => [
      ...prev,
      { id: crypto.randomUUID(), titulo, done: false },
    ]);
    setTexto("");
  };

  const toggle = (id) => {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const eliminar = (id) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div style={styles.wrap}>
      <h2 style={styles.title}>Chechlist</h2>

      <div style={styles.row}>
        <input
          placeholder="Escribe una tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregar()}
          style={styles.input}
        />
        <button onClick={agregar} style={styles.btn}>
          Agregar
        </button>
      </div>

      <ul style={styles.list}>
        {tareas.map((t) => (
          <li key={t.id} style={styles.item}>
            <label style={styles.label}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggle(t.id)}
              />
              <span
                style={{
                  ...styles.text,
                  textDecoration: t.done ? "line-through" : "none",
                  opacity: t.done ? 0.6 : 1,
                }}
              >
                {t.titulo}
              </span>
            </label>
            <button onClick={() => eliminar(t.id)} style={styles.delete}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div style={styles.footer}>
        {tareas.filter((t) => !t.done).length} pendientes / {tareas.length} total
      </div>
    </div>
  );
}

const styles = {
  wrap: { maxWidth: 520, margin: "1rem auto", padding: 16, borderRadius: 12, border: "1px solid #ddd" },
  title: { margin: 0, marginBottom: 12 },
  row: { display: "flex", gap: 8 },
  input: { flex: 1, padding: "10px 12px", borderRadius: 8, border: "1px solid #ccc" },
  btn: { padding: "10px 14px", borderRadius: 8, border: "none", cursor: "pointer" },
  list: { listStyle: "none", margin: "12px 0 0", padding: 0, display: "grid", gap: 8 },
  item: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: 8, background: "#f7f7f7" },
  label: { display: "flex", alignItems: "center", gap: 10 },
  text: { fontSize: 16 },
  delete: { border: "none", background: "transparent", cursor: "pointer", fontSize: 18, lineHeight: 1 },
  footer: { marginTop: 10, fontSize: 14, opacity: 0.8 },
};
