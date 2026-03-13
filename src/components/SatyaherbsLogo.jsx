import logoImg from '../images /logo.png'

/**
 * SatyaherbsLogo — uses the real brand logo image
 *
 * Props:
 *   size: 'sm' | 'md' | 'lg' | 'xl'
 *   className: extra css classes
 *   style: inline style overrides (e.g. for background on dark sections)
 *   dark: boolean — if true, adds a dark background behind the logo (for light backgrounds where the logo needs contrast)
 */
export default function SatyaherbsLogo({ size = 'md', className = '', style = {}, dark = false }) {
  const heights = {
    sm: 48,
    md: 72,
    lg: 96,
    xl: 128,
  }

  const h = heights[size] || heights.md

  return (
    <img
      src={logoImg}
      alt="SATYAHERBS — Authentic Himalayan Shilajit"
      height={h}
      style={{
        height: `${h}px`,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        ...style,
      }}
      className={className}
    />
  )
}
