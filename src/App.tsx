import './App.css'

function App() {
  return (
    <div className="container">
      <div className="profile">
        <img src="./assets/avatar.jpg" alt="李四" className="avatar" />
        <h1 className="name">李四</h1>
        <p className="bio">前端开发工程师 | 技术爱好者</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/lisi" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/lisi" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com/in/lisi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="projects">
        <h2>项目展示</h2>
        <div className="project-card">
          <h3>项目一</h3>
          <p>这是一个关于React的项目。</p>
        </div>
        <div className="project-card">
          <h3>项目二</h3>
          <p>这是一个关于Vue的项目。</p>
        </div>
      </div>
    </div>
  )
}

export default App
