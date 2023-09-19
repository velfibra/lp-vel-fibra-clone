export default function pdf() {
  return (
    <div className="w-screen">
      <embed
        className="w-full"
        src="/politica-de-privacidade.pdf"
        type="application/pdf"
        width="100%"
        height="800px"
      />
    </div>
  );
}
