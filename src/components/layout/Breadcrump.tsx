
interface Props {
  items: string[];
}

export function Breadcrumb({
  items,
}: Props) {
  return (
    <div className="flex gap-2 text-secondary text-sm">

      {items.map((item, index) => (
        <span key={item}>
          {index > 0 && " / "}
          {item}
        </span>
      ))}

    </div>
  );
}

