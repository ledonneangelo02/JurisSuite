import { Link } from 'react-router-dom'
import './Tools.css'

const tools = [
  {
    name: 'Case Brief Generator',
    description: 'Turn case details into a clean, study-ready brief.',
    href: '/tools/brief-generator',
    accent: 'tools-picker-card-yellow',
    available: true,
  },
  {
    name: 'Case Analyzer',
    description: 'Compare facts, issues, rules, and holdings across case materials.',
    href: '/tools/case-analyzer',
    accent: 'tools-picker-card-green',
    available: false,
  },
]

export default function Tools() {
  return (
    <section className="tools-picker-page">
      <div className="tools-picker-shell">
        <header className="tools-picker-hero">
          <span className="tools-picker-tape tools-picker-tape-left" aria-hidden="true" />
          <span className="tools-picker-tape tools-picker-tape-right" aria-hidden="true" />
          <p className="tools-picker-eyebrow">JurisSuite tools</p>
          <h1>Pick the workspace you want to use.</h1>
          <p>
            Start with the tool that matches your current assignment, then move into the focused workflow for that task.
          </p>
        </header>

        <div className="tools-picker-grid" aria-label="Available tools">
          {tools.map((tool) => (
            <article key={tool.name} className={`tools-picker-card ${tool.accent}`}>
              <div>
                <p className="tools-picker-status">
                  {tool.available ? 'Available now' : 'Coming soon'}
                </p>
                <h2>{tool.name}</h2>
                <p>{tool.description}</p>
              </div>

              {tool.available ? (
                <Link className="tools-picker-button" to={tool.href}>
                  <span>Open Tool</span>
                </Link>
              ) : (
                <button className="tools-picker-button tools-picker-button-disabled" type="button" disabled>
                  <span>Coming Soon</span>
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
