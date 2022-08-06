import {useMemo} from "react";

export const usePagination = (totalPages) => {
  const result = useMemo(() => {
    let resArray = [];
    for (let i = 0; i < totalPages; i++) {
      resArray.push(i + 1);
    }
    return resArray;
  }, [totalPages]);
  return result;
}