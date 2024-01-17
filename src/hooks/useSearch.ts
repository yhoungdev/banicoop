// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useState } from "react";

const useSearchFilter = initialData => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterData = dataFields => {
    if (!searchTerm) return initialData;

    return initialData.filter(item =>
      dataFields.some(field =>
        item[field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return { searchTerm, setSearchTerm, filterData };
};

export default useSearchFilter;
