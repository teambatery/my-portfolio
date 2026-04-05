import { useState } from 'react';
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
        <p className="bio">
          데이터를 통해 가치를 창출하고, 혁신적인 AI 아키텍처를 설계하는 데이터 사이언티스트입니다.
        </p>
      </header>

      {/* 프로젝트 섹션 */}
      <section className="section">
        <h2>Core Project: WSSC-3D</h2>
        <div className="card">
          <h3>Weighted Spatial Spiking Core</h3>
          <p>
            차세대 스파이킹 신경망(SNN) 아키텍처를 연구하고 최적화하는 프로젝트입니다. 
            효율적인 에너지 사용과 인간 신경망을 닮은 AI 구조를 지향합니다.
          </p>
        </div>
      </section>

      {/* 외부 API 연동 섹션: Formspree */}
      <section className="section">
        <h2>Contact Me (External API)</h2>
        <div className="card">
          <p style={{ marginBottom: '15px', fontSize: '0.9rem', color: '#aaa' }}>
            * Formspree API를 연동하여 실제 메일 전송이 가능합니다.
          </p>
          <form action="https://formspree.io/f/xreoanbo" method="POST">
            <div style={{ marginBottom: '10px' }}>
              <input 
                type="email" 
                name="email" 
                placeholder="보내시는 분의 이메일" 
                required 
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #444', background: '#333', color: '#fff' }} 
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <textarea 
                name="message" 
                placeholder="메시지를 입력해주세요" 
                required 
                style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #444', background: '#333', color: '#fff', height: '100px', resize: 'none' }}
              ></textarea>
            </div>
            <button type="submit" className="like-btn" style={{ width: '100%', cursor: 'pointer' }}>
              메시지 전송하기
            </button>
          </form>
        </div>
      </section>

      {/* 피드백 섹션 (좋아요/댓글) */}
      <section className="section">
        <h2>User Interaction</h2>
        <div className="feedback-card">
          <div className="like-section" style={{ textAlign: 'center' }}>
            <button className="like-btn" onClick={() => setLikes(likes + 1)}>
              👍 프로젝트 응원하기 {likes}
            </button>
          </div>

          <div className="comment-section" style={{ marginTop: '30px' }}>
            <div className="input-group">
              <input 
                type="text" 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                placeholder="방명록을 남겨주세요!"
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
        <p>© 2026 Junhwan Bae. Built with React & Vite (Cloudflare Pages).</p>
      </footer>
    </div>
  );
}

export default App;