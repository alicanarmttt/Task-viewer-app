import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slice/taskCreateSlice";

function TaskCreate() {
  //state tanımları:
  const [taskInfo, setTaskInfo] = useState(""); //Text area
  const [taskCategory, setTaskCategory] = useState(""); //select için
  const dispatch = useDispatch();

  //görev ekleme fonksiyonu
  const handleAddTask = () => {
    if (!taskInfo.trim() || !taskCategory) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    const newTask = {
      id: Date.now(), //Benzersiz bir ID.
      taskInfo,
      taskCategory,
    };

    dispatch(addTask(newTask)); //redux store'a ekle
    console.log(newTask);
    setTaskInfo("");
    setTaskCategory("");
  };

  return (
    <div>
      <div>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Enter the task.
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={taskInfo}
              onChange={(e) => setTaskInfo(e.target.value)} //state güncelleme.
            ></textarea>
          </div>
        </div>

        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)} //state güncelleme.
          >
            <option value="">Open this select menu</option>
            <option value="İş">İş</option>
            <option value="Kişisel">Kişisel</option>
            <option value="Acil">Acil</option>
          </select>
        </div>

        <div style={{ marginTop: "15px" }}></div>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handleAddTask} //butona tıklandığında fonksiyonu çalıştır.
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TaskCreate;
