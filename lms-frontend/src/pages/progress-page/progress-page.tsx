import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import { CourseProgress } from "../../types/state";


// Пропсы компонента
type ProgressProps = {
  courses: CourseProgress[]; // Массив курсов
  profileButtonHandler: ()=> void;
  handleSearchFunction: (search:string) => void;
  handleProgressClick: ()=> void;
};

function Progress({ courses, profileButtonHandler, handleProgressClick, handleSearchFunction }: ProgressProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseProgress>(courses[0]); // Выбранный курс
  const [totalProgress, setTotalProgress] = useState<number>(0); // Общий прогресс
  const chartRef = useRef<HTMLCanvasElement | null>(null); // Ссылка на canvas
  const chartInstance = useRef<Chart | null>(null); // Экземпляр графика
  // Эффект для создания/обновления графика
  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Создаем график
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Модуль 1", "Модуль 2", "Модуль 3", "Модуль 4"], // Подписи модулей
        datasets: [
          {
            label: "Прогресс (%)",
            data: selectedCourse.moduleProgress, // Данные прогресса
            backgroundColor: "#6200ea", // Цвет столбцов
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });

    // Очистка при размонтировании
    return () => {
      chartInstance.current?.destroy();
    };
  }, [selectedCourse]);

  // Эффект для обновления общего прогресса
  useEffect(() => {
    updateProgress();
  }, [selectedCourse]);

  // Функция для обновления прогресса
  function updateProgress() {
    if (!chartInstance.current) return;

    // Обновляем данные графика
    chartInstance.current.data.datasets[0].data = selectedCourse.moduleProgress;
    chartInstance.current.update();

    // Рассчитываем средний прогресс
    const avgProgress =
      selectedCourse.moduleProgress.reduce((a, b) => a + b, 0) /
      selectedCourse.moduleProgress.length;

    setTotalProgress(avgProgress);
  }

  return (
    <>
      <Header profileButtonHandler={profileButtonHandler} handleProgressClick={handleProgressClick} handleSearchFunction={handleSearchFunction}/>
      <div className="progress-container">
        <h1>Прогресс обучения</h1>
        <label htmlFor="course-select">Выберите курс:</label>
        <select
          id="course-select"
          className="progress-select"
          onChange={(e) => {
            const selected = courses.find(
              (course) => course.CourseName === e.target.value
            );
            selected && setSelectedCourse(selected);
          }}
        >
          {courses.map((course) => (
            <option key={course.CourseName} value={course.CourseName}>
              {course.CourseName}
            </option>
          ))}
        </select>

        <div className="chart-container">
          <canvas ref={chartRef}></canvas>
        </div>

        <p id="progress-text">Прогресс курса: {totalProgress.toFixed(2)}%</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${totalProgress}%` }}
          >
            {totalProgress.toFixed(2)}%
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Progress;