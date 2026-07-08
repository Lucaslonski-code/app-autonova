
interface SwitchProps {
  checked: boolean;
  onChange(): void;
}

export function Switch({
  checked,
  onChange,
}: SwitchProps) {
  return (
    <button
      onClick={onChange}
      className={`
        relative
        h-7
        w-12
        rounded-full
        transition-default
        ${
          checked
            ? "bg-primary"
            : "bg-border"
        }
      `}
    >
      <span
        className={`
          absolute
          top-1
          h-5
          w-5
          rounded-full
          bg-white
          transition-default
          ${
            checked
              ? "left-6"
              : "left-1"
          }
        `}
      />
    </button>
  );
}

