
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-3 text-secondary"
      />

      <input
        placeholder="Pesquisar..."
        className="
          w-full
          rounded-card
          border
          border-default
          bg-surface
          py-3
          pl-10
          pr-4
        "
      />
    </div>
  );
}

