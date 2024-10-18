import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-end mt-4">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="px-2 py-1 bg-[#fafafa]"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          aria-label="First Page"
        >
          <DoubleArrowLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          className="px-2 py-1 bg-[#fafafa]"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Previous Page"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        {pageNumbers.map((pageNumber) => {
          const isCurrentPage = pageNumber === currentPage;
          return (
            <button
              key={pageNumber}
              className={cn(
                "rounded-lg py-1 px-3",
                isCurrentPage
                  ? "bg-[#23A3DA] text-white"
                  : "bg-[#fafafa] text-black hover:bg-gray-200"
              )}
              onClick={() => handlePageChange(pageNumber)}
              aria-current={isCurrentPage ? "page" : undefined}
            >
              {pageNumber}
            </button>
          );
        })}
        <Button
          variant="outline"
          className="px-2 py-1 bg-[#fafafa]"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next Page"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          className="px-2 py-1 bg-[#fafafa]"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last Page"
        >
          <DoubleArrowRightIcon className="w-4 h-4 " />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
