export default function CorpoPagina({ children }) {
  return (
    <div className="w-screen flex flex-col">
      <div className="w-page p-10 mx-auto">{children}</div>
    </div>
  );
}
