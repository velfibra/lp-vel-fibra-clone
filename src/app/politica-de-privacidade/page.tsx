export default function pdf() {
  return (
    <div className="w-screen">
      <embed
        className=" min-h-screen w-full"
        src="/politica-de-privacidade.pdf"
        type="application/pdf"
        width="100%"
        height="900px"
      />
    </div>
  );
}
