import PropTypes from "prop-types";

function Task({ task, onSelect }) {
  // Task açıklaması için bir uzunluk limiti belirleyelim
  const maxLength = 50; // Maksimum 50 karakter

  // Eğer açıklama çok uzunsa, sonunda "..." ekleyerek keselim
  const truncatedInfo =
    task.taskInfo.length > maxLength
      ? task.taskInfo.substring(0, maxLength) + "..."
      : task.taskInfo;

  return (
    <div>
      <li
        className={`task-list-window-item ${
          task.isCompleted ? "completed" : ""
        }`}
        onClick={onSelect}
        style={{
          cursor: "pointer",
          display: "flex", // Kategori ve açıklama için düzen
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {task.isCompleted && <span>✔️</span>} {truncatedInfo}
        {/* Task kategorisi (bold) */}
        <strong
          style={{
            backgroundColor: "#f9f9f9",
            padding: "4px 8px",
            borderRadius: "5px",
            fontSize: "14px",
            color: "#555",
          }}
        >
          {task.taskCategory}
        </strong>
      </li>
    </div>
  );
}

// PropTypes tanımlaması
Task.propTypes = {
  task: PropTypes.shape({
    taskInfo: PropTypes.string.isRequired, // Görev açıklaması zorunlu
    taskCategory: PropTypes.string.isRequired, // Görev kategorisi zorunlu
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Task;
