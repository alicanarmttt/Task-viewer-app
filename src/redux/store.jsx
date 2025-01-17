import { configureStore } from "@reduxjs/toolkit";
import taskCreateReducer from "../redux/slice/taskCreateSlice";

//localstorage'a kaydatme fonksiyonu oluştur:
const saveToLocalStorage = (state) => {
  try {
    // Kaydedilecek state'i JSON formatına çeviriyoruz
    const kaydedilecekState = JSON.stringify(state.tasks);

    // localStorage'a "tasks" anahtarıyla kaydediyoruz
    localStorage.setItem("tasks", kaydedilecekState);
  } catch (error) {
    console.log("Görevler storage'a kaydedilemedi.", error);
  }
};

// localStorage’dan yükleme fonksiyonu
const loadFromLocalStorage = () => {
  try {
    const kaydedilmisState = localStorage.getItem("tasks");
    if (kaydedilmisState === null) return undefined; // Eğer veri yoksa
    return JSON.parse(kaydedilmisState);
    return tasks.map((task) => ({
      ...task,
      isCompleted: task.isCompleted ?? false, // Eksikse false yap
    }));
  } catch (error) {
    console.log("localstorage'dan görevler yüklenemedi", error);
    return undefined;
  }
};

//localstorageden sayfa yüklendiğinde statelerimizi otomatik olarak doldurmak için kullanılır.
const preloadedState = { taskCreate: { tasks: loadFromLocalStorage() || [] } };

export const store = configureStore({
  reducer: {
    taskCreate: taskCreateReducer,
  },
  preloadedState,
});

//store her değiştiğinde görevleri localStorage'e kaydet subscribe dispatch tetiklendiğidne tetiklenir.
store.subscribe(() => {
  saveToLocalStorage(store.getState().taskCreate);
});
export default store;
