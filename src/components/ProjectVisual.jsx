function InventoryPreview() {
  return (
    <div className="preview-ui inventory-ui">
      <div className="preview-sidebar"><b>invento<span>.</span></b><i className="selected" /><i /><i /><i /><div className="preview-avatar">HV</div></div>
      <div className="preview-main"><div className="preview-topline"><span>Overview</span><small>Last 30 days⌄</small></div><div className="preview-stats"><div><small>Total stock</small><b>2,480</b><em>↗ 12.8%</em></div><div><small>Orders</small><b>184</b><em>↗ 8.2%</em></div><div><small>Low stock</small><b>12</b><em className="warn">Needs attention</em></div></div><div className="preview-chart"><div className="chart-label">Stock activity <span>View report ↗</span></div><div className="chart-bars">{[32, 47, 38, 67, 52, 76, 57, 86, 62, 72, 92, 75].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div></div></div>
    </div>
  )
}

function EstatePreview() {
  return (
    <div className="preview-ui estate-ui">
      <div className="estate-head"><b>estate<span>view</span></b><span>Buy　 Rent　 Explore</span><button>List a property +</button></div>
      <div className="estate-title">Find a place to<br /><span>feel at home.</span></div>
      <div className="estate-filters"><span>⌕&nbsp; Location</span><span>⌄&nbsp; Property type</span><span>⌄&nbsp; Price range</span><button>Search&nbsp; ↗</button></div>
      <div className="estate-listing"><div className="house-art"><div className="house-sun" /><div className="house-roof" /><div className="house-shape"><i /><i /><b /></div><div className="house-ground" /></div><div className="listing-info"><span>FEATURED PROPERTY</span><b>Modern hillside retreat</b><small>Ahmedabad, Gujarat</small><strong>₹ 84,00,000 <em>↗</em></strong></div></div>
    </div>
  )
}

function KanbanPreview() {
  return (
    <div className="preview-ui kanban-ui">
      <div className="kanban-head"><b>sync<span>board</span></b><span>Workspace / Product team</span><button>＋&nbsp; New task</button></div>
      <div className="kanban-title">Product roadmap <small>↗</small><span>●●●●　+ 3</span></div>
      <div className="kanban-columns">
        {[['TO DO', 'Sketch onboarding flow', 'Audit components'], ['IN PROGRESS', 'Build search results', 'Mobile nav states'], ['DONE', 'Set up project repo', 'Design tokens']].map(([title, ...cards], i) => <div className="kanban-column" key={title}><div className="kanban-column-title"><i className={`column-dot dot-${i}`} />{title}<span>•••</span></div>{cards.map((card, j) => <div className="kanban-task" key={card}><small>{j ? 'DESIGN' : 'DEVELOPMENT'}</small><b>{card}</b><span>◉　{j ? 'TM' : 'HV'} <em>{j ? '2d' : '1d'}</em></span></div>)}<div className="kanban-add">＋ Add task</div></div>)}
      </div>
    </div>
  )
}

const previews = { inventory: InventoryPreview, estate: EstatePreview, kanban: KanbanPreview }

export default function ProjectVisual({ type }) {
  const Preview = previews[type]
  return (
    <div className={`project-visual project-visual-${type}`} aria-label="Illustrative interface concept, not a product screenshot">
      <div className="visual-orb" />
      <div className="preview-frame"><Preview /></div>
      <span className="visual-caption">INTERFACE CONCEPT · NOT A PRODUCT SCREENSHOT</span>
    </div>
  )
}
