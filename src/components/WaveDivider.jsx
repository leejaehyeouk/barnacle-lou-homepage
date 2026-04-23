export default function WaveDivider({ from = '#E8F5EF', to = '#FFFFFF', flip = false }) {
  return (
    <div
      style={{ backgroundColor: to, lineHeight: 0 }}
      className={flip ? 'rotate-180' : ''}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '80px' }}
      >
        <path
          fill={from}
          d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z"
        />
      </svg>
    </div>
  )
}
