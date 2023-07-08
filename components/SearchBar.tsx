"use client";

import { Search } from "lucide-react";
import Input from "./Input";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  function handleSearch(e: any, value: string) {
    e.preventDefault();
    router.push(`/productos?buscar=${value}`);
  }
  return (
    <Input
      placeholder="Buscar..."
      type="text"
      handleSubmit={handleSearch}
      clearOnSubmit={true}
    >
      <Search size={18} />
    </Input>
  );
};

export default SearchBar;
