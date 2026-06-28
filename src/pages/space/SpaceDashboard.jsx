import { useNavigate } from "react-router-dom";
import { STORAGE_KEY } from "../../utils/access";
import { chapters } from "../../data/iso2026/chapters";
import ChapterCard from "../../components/space/ChapterCard";
import "./SpaceDashboard.css";
import { getOverallProgress } from "../../utils/progress";

export default function SpaceDashboard() {

  const navigate = useNavigate();
  const overallProgress = getOverallProgress(chapters);
  const handleLogout = () => {

    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);

    navigate("/space");

  };

  return (

    <div className="space-dashboard">

      <div className="dashboard-header">

<div className="portal-header-left">

    <div className="portal-logo">
        🚀
    </div>

    <div>

        <h1 className="portal-title">
            Indian Space Olympiad 2026
        </h1>

        <p className="portal-subtitle">
            Private Learning Portal | Class IX-X
        </p>

    </div>

</div>
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <div className="stats">

        <div className="stat-card">

          <h2 style={{ color:"#fff" }}>11</h2>

          <p>Chapters</p>

        </div>

        <div className="stat-card">

          <h2 style={{ color:"#fff" }}>169</h2>

          <p>Topics</p>

        </div>

        <div className="stat-card">

          <h2 style={{ color:"#fff" }}>1370+</h2>

          <p>MCQs Planned</p>

        </div>

        <div className="stat-card">

          <h2 style={{ color:"#fff" }}>{overallProgress}%</h2>

          <p>Progress</p>

        </div>

      </div>

      <div className="chapter-grid">

        {chapters.map((chapter) => (

          <ChapterCard
            key={chapter.id}
            chapter={chapter}
          />

        ))}

      </div>

    </div>

  );

}