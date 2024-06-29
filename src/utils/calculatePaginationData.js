export const calculatePaginationData = ({totalItems, perPage, page}) => {
    const totalPages = Math.ceil((totalItems / perPage));
    const hasNextPage = page !== totalPages;
    const hasPrevPage = page !== 1;

    return {
      totalPages,
      hasNextPage,
      hasPrevPage,
    };
  };
