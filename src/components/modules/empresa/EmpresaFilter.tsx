
import { SearchInput } from "@/components/ui/SearchInput";
import { Select } from "@/components/ui/Select";

export function EmpresaFilter() {
  return (
    <div className="flex gap-4">

      <SearchInput />

      <Select>

        <option>Todos</option>

      </Select>

    </div>
  );
}

