import APIS from "@/apis";
import Axios from "@/utils/axios";
import { useDebouncedValue, useDidUpdate } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { SymbolImpl } from "./types";
import { useState } from "react";

const useSymbolsSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [debounced] = useDebouncedValue(searchInput, 200);

  const [opened, setOpened] = useState(false);

  const getExchangeNumberQueryFn = () => {
    return Axios<Array<SymbolImpl>>({
      method: "GET",
      url: `${APIS.getExchangeNumber}?term=${searchInput.trim()}`,
    });
  };

  const {
    data: symbols,
    isFetching: symbolsFetcing,
    refetch: refetchSymbols,
  } = useQuery({
    queryKey: ["getExchangeNumber"],
    queryFn: getExchangeNumberQueryFn,
    enabled: false,
  });

  useDidUpdate(() => {
    if (debounced.trim().length >= 2 && opened) refetchSymbols();
  }, [debounced]);

  console.log(symbols);

  return {
    searchInput,
    setSearchInput,
    symbols,
    symbolsFetcing,
    opened,
    setOpened,
  };
};

export default useSymbolsSearch;
