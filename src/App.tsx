import React, { useState } from 'react';
import './App.css';

function App() {
  // 상태 관리 (좋아요 & 댓글)
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>배준환 | Junhwan Bae</h1>
        <p className="subtitle">Suwon University | Data Science</p>
        <p className="bio">데이터를 통해 가치를 창출하고, 혁신적인 AI 아키텍처를 설계하는 데이터 사이언티스트입니다.</p>
      </header>

      <section className="section">
        <h2>Core Project: WSSC-3D</h2>
        <div className="card">
          <h3>Weighted Spatial Spiking Core</h3>
          <p>차세대 스파이킹 신경망(SNN) 아키텍처를 연구하고 최적화하는 프로젝트입니다. 효율적인 에너지 사용과 인간 신경망을 닮은 AI 구조를 지향합니다.</p>
        </div>
      </section>

      <section className="section">
        <h2>Feedback (Interactions)</h2>
        <div className="feedback-card">
          {/* 좋아요 버튼 */}
          <div className="like-section">
            <button className="like-btn" onClick={() => setLikes(likes + 1)}>
              👍 응원하기 {likes}
            </button>
          </div>

          {/* 댓글 기능 */}
          <div className="comment-section">
            <div className="input-group">
              <input 
                type="text" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                placeholder="응원 메시지를 남겨주세요!"
              />
              <button onClick={handleAddComment}>등록</button>
            </div>
            <ul className="comment-list">
              {comments.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Junhwan Bae. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;