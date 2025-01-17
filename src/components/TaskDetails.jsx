import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/slice/taskCreateSlice";
import PropTypes from "prop-types";
import { completeTask } from "../redux/slice/taskCreateSlice";

const TaskDetails = ({ task, closeDetails }) => {
  const [isEditing, setIsEditing] = useState(false); // Düzenleme modunda mı?
  const [editedTaskInfo, setEditedTaskInfo] = useState(task.taskInfo); // Düzenlenen görev
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask(task.id)); // Redux'tan görevi sil
    closeDetails(); // Detay bileşenini kapat
  };

  const handleComplete = () => {
    dispatch(completeTask(task.id)); // Görevi tamamlandı olarak işaretle
    alert("Görev tamamlandı!"); // Ekstra bir durum eklenebilir
    closeDetails(); // Detay bileşenini kapat
  };

  const handleSave = () => {
    if (!editedTaskInfo.trim()) {
      alert("Görev bilgisi boş olamaz!");
      return;
    }

    dispatch(updateTask({ id: task.id, taskInfo: editedTaskInfo })); // Redux'ta görevi güncelle
    setIsEditing(false); // Düzenleme modundan çık
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <h6>{task.taskInfo}</h6>
          <strong>Kategori: {task.taskCategory}</strong>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-warning"
            >
              Düzenle
            </button>
            <button onClick={handleComplete} className="btn btn-success mx-2">
              Tamamla
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Sil
            </button>
          </div>
        </>
      ) : (
        <>
          <textarea
            value={editedTaskInfo}
            onChange={(e) => setEditedTaskInfo(e.target.value)}
            rows="3"
            className="form-control"
          ></textarea>
          <button onClick={handleSave} className="btn btn-primary mt-2">
            Kaydet
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="btn btn-secondary mt-2 mx-2"
          >
            Vazgeç
          </button>
        </>
      )}
    </div>
  );
};

TaskDetails.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired, // Görevin benzersiz ID'si (required)
    taskInfo: PropTypes.string.isRequired, // Görevin açıklaması (required)
    taskCategory: PropTypes.string.isRequired, // Görevin kategorisi (required)
  }).isRequired,
  closeDetails: PropTypes.func.isRequired, // Bileşeni kapatma işlevi (required)
};

export default TaskDetails;
