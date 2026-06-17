import './About.css'

export default function CorkBoard({ children }) {
  return (
    <div className="cork-board" aria-hidden="false">
      <div className="cork-board-inner">
        {children ? (
          children
        ) : (
          <>
            <article className="cork-note">
              <div className="note-pin" />
              <div className="note-paper">
                <h4>Pinned Insight</h4>
                <p>
                  “The average law student spends 3-5 hours per week on case briefing alone.
                  That's time that could be spent on deeper analysis and synthesis.”
                </p>
              </div>
            </article>
            <article className="cork-note small">
              <div className="note-pin" />
              <div className="note-paper">
                <h5>Study Tip</h5>
                <p>Try briefing cases with a focused 20-minute summary and then discuss with peers.</p>
              </div>
            </article>
          </>
        )}
      </div>
    </div>
  )
}
