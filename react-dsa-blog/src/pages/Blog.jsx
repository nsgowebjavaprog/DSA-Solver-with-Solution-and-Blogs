import { useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (!title.trim()) return;
    if (editingIndex !== null) {
      const updated = [...posts];
      updated[editingIndex] = title;
      setPosts(updated);
      setEditingIndex(null);
    } else {
      setPosts([...posts, title]);
    }
    setTitle("");
  };

  const handleEdit = (i) => {
    setTitle(posts[i]);
    setEditingIndex(i);
  };

  const handleDelete = (i) => {
    setPosts(posts.filter((_, idx) => idx !== i));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Blog Page (CRUD)</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title..."
          className="border p-2 w-full rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="space-y-2">
        {posts.map((post, i) => (
          <li
            key={i}
            className="flex justify-between items-center p-3 bg-gray-100 rounded shadow"
          >
            <span>{post}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(i)}
                className="px-2 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(i)}
                className="px-2 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
