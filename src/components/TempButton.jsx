const getTextColor = (bgcolor) => {
  if (!bgcolor) return 'white';
  const rgb = bgcolor.substring(4, bgcolor.length - 1)
    .replace(/ /g, '')
    .split(',');
  const r = parseInt(rgb[0], 10);
  const g = parseInt(rgb[1], 10);
  const b = parseInt(rgb[2], 10);
  const brightness = Math.round(((r * 299) + (g * 587) + (b * 114)) / 1000);
  return (brightness > 125) ? 'black' : 'white';
}

export const TempButton = ({ colorClass, children, color }) => {
  return (
    <div className={`btn ${colorClass} p-2 px-4 m-3 shadow shadow`}
      // style={color ? { backgroundColor: color } : {}}
      style={{ backgroundColor: color, color: getTextColor(color) }}
      // style upon hover opacity becomes 0.8
      onMouseEnter={(e) => {
        e.target.style.opacity = 0.7
        e.target.style.outline = "3px solid #000000"
      }}
      onMouseLeave={(e) => {
        e.target.style.opacity = 1
        e.target.style.outline = "none"
      }}
    > {children}</div>
  )
}

export const BlueButton = (props) => {
  return (
    <TempButton colorClass="btn-primary" >{ props.children}</TempButton>
  )
}

export const RedButton = (props) => {
  return (
    <TempButton colorClass="btn-danger" >{props.children}</TempButton>
  )
}