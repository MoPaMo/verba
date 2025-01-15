export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative mx-auto max-w-4xl space-y-8 px-4 py-8 lg:px-8 lg:py-12">
      {children}
    </div>
  );
}
