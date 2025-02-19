import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Header from "../header/Header";
import Footer from "../footer/footer";

const progressData: Record<string, number[]> = {
  python: [80, 60, 90, 40],
  ml: [50, 30, 70, 20],
  web: [90, 70, 80, 60],
};

function Progress() {
  const [selectedCourse, setSelectedCourse] = useState<keyof typeof progressData>("python");
  const [totalProgress, setTotalProgress] = useState<number>(0);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Модуль 1", "Модуль 2", "Модуль 3", "Модуль 4"],
        datasets: [
          {
            label: "Прогресс (%)",
            data: progressData[selectedCourse],
            backgroundColor: "#6200ea",
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

    return () => {
      chartInstance.current?.destroy();
    };
  }, [selectedCourse]);

  useEffect(() => {
    updateProgress();
  }, [selectedCourse]);

  function updateProgress() {
    if (!chartInstance.current) return;

    chartInstance.current.data.datasets[0].data = progressData[selectedCourse];
    chartInstance.current.update();

    const avgProgress =
      progressData[selectedCourse].reduce((a, b) => a + b, 0) /
      progressData[selectedCourse].length;

    setTotalProgress(avgProgress);
  }

  return (
    <>
      <Header/>
        <div className="progress-container">
          <h1>Прогресс обучения</h1>
          <label htmlFor="course-select">Выберите курс:</label>
          <select
            id="course-select"
            className="progress-select"
            onChange={(e) => setSelectedCourse(e.target.value as keyof typeof progressData)}
          >
            <option value="python">Основы Python</option>
            <option value="ml">Машинное обучение</option>
            <option value="web">Веб-разработка</option>
          </select>

          <div className="chart-container">
            <canvas ref={chartRef}></canvas>
          </div>

          <p id="progress-text">Прогресс курса: {totalProgress}%</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${totalProgress}%` }}>
              {totalProgress}%
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default Progress;
