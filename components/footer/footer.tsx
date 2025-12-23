export default function Footer() {
  return (
    <footer className="fixed bottom-0 right-0 left-0 w-full border-t">
      <div className="max-w-[90vw] mx-auto flex justify-between items-center py-8">
        <div>
          <small className="font-title text-primary font-bold text-[20px]">
            Foodio.{" "}
          </small>
          <small className="font-body text-muted-foreground text-sm">
            &#169; 2025 Foodio Inc.
          </small>
        </div>
        <div className="font-body text-muted-foreground *:text-sm">
          <small className="mr-4">Privacy</small>
          <small className="mr-4">Terms</small>
          <small>Contact</small>
        </div>
      </div>
    </footer>
  );
}
