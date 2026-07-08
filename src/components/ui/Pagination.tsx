
interface PaginationProps {
  page: number;
  total: number;
}

export function Pagination({
  page,
  total,
}: PaginationProps) {
  return (
    <div className="
      flex
      items-center
      justify-between
    ">
      <span>
        Página {page} de {total}
      </span>
    </div>
  );
}

