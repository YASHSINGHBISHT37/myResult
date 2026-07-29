export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-99999 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)
        `,
        backgroundSize: "10px 10px",
      }}
    />
  );
}