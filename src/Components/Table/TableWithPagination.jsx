import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "../ui/table";
import { cn } from "@/lib/utils";
import Pagination from "../Table/Pagination";


const TableWithPagi = ({
  columns,
  data,
  caption,
  itemsPerPage = 10,
  className,
  getRowId,
  ...props
}) => {
  // Sorting state
  const [sortConfig, setSortConfig] = React.useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle sorting
  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        // Handle different data types 
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "ascending" ? aValue - bValue : bValue - aValue;
        }

        // Convert to string for comparison
        const aStr = String(aValue).toLowerCase();
        const bStr = String(bValue).toLowerCase();

        if (aStr < bStr) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aStr > bStr) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  // Handle pagination
  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, itemsPerPage]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); // Reset to first page on sort
  };

  const getSortIndicator = (key) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === "ascending" ? " 🔼" : " 🔽";
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden border border-purple-200 rounded-lg">
        <Table className={cn("your-default-table-styles", className)} {...props}>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader className="text-nowrap bg-purple-40">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={String(column.accessor)}
                  onClick={() => requestSort(column.accessor)}
                  className="cursor-pointer select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      requestSort(column.accessor);
                    }
                  }}
                  aria-sort={
                    sortConfig?.key === column.accessor
                      ? sortConfig.direction === "ascending"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span className="flex items-center">
                    {column.header}
                    {getSortIndicator(column.accessor)}
                  </span>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="border-purple-200">
            {paginatedData.map((row) => {
              const rowKey = getRowId ? getRowId(row) : row.id;
              return (
                <TableRow key={rowKey} className="border:">
                  {columns.map((column) => (
                    <TableCell key={`${rowKey}-${String(column.accessor)}`}>
                      {column.render
                        ? column.render(row[column.accessor], row, {
                            edit: handleEdit ?? (() => {}),
                            delete: handleDelete ?? (() => {}),
                          })
                        : String(row[column.accessor])}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default TableWithPagi;
