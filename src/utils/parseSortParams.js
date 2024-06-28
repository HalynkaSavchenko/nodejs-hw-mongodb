import { sortOrderList } from "../constants/index.js";

export const parseSortParams =({sortBy, sortOrder}, schemaFields) => {
    const parsedSortOrder = sortOrderList.includes(sortOrder) ? sortOrder : sortOrderList[0];
    const parsedSortBy = schemaFields.includes(sortBy) ? sortBy : "name";
    return {
        sortBy: parsedSortBy,
        sortOrder: parsedSortOrder,
    };
};
