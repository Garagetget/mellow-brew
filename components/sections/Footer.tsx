export function Footer() {
  return (
    <footer className="border-t border-brown/10 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-ink/60 md:flex-row">
        <p className="font-medium text-ink">Mellow Brew</p>
        <p>© {new Date().getFullYear()} Mellow Brew. All rights reserved.</p>
      </div>
    </footer>
  );
}
