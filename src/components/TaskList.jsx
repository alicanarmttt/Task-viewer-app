import { useSelector } from "react-redux"; // Redux store'dan veri almak için
import Task from "./Task"; // Her bir görevi temsil eden bileşen
import { useState } from "react";
import TaskDetails from "./TaskDetails"; // Görev detaylarını gösteren bileşen

function TaskList() {
  // Redux store'dan görevleri al
  const tasks = useSelector((state) => state.taskCreate.tasks);

  // Seçilen görevi tutan state
  const [selectedTask, setSelectedTask] = useState(null);

  // Eğer hiç görev yoksa
  if (tasks.length === 0) {
    return <p>Henüz görev eklenmedi.</p>;
  }

  return (
    <div className="list-and-details">
      {
        /* Görev listesini her zaman göster */
        <ul className="task-list-window">
          {tasks.map((task) => (
            <Task
              key={task.id} // Her görevin benzersiz ID'si
              task={task} // Görevin bilgilerini gönder
              onSelect={() => setSelectedTask(task)} // Tıklanan görevi seç
            />
          ))}
        </ul>
      }
      {/* Eğer bir görev seçilmişse, TaskDetails bileşenini göster */}
      {selectedTask && (
        <div className="task-list-details">
          <TaskDetails
            task={selectedTask} // Seçilen görev bilgilerini gönder
            closeDetails={() => setSelectedTask(null)} // Detayları kapatma işlevi
          />
        </div>
      )}
    </div>
  );
}

export default TaskList;
