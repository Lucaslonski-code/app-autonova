
interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

export function Modal({
  open,
  children,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/60
    ">
      <div className="
        w-full
        max-w-xl
        rounded-modal
        bg-surface
        p-8
      ">
        {children}
      </div>
    </div>
  );
}

