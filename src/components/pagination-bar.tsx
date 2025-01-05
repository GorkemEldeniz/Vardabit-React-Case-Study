import { useSearchParams } from "react-router";

const PaginationBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPageNumber = searchParams.get("page") || "1";

  return (
    <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-4">
      <div className="join">
        <button
          onClick={() => {
            setSearchParams((prev) => {
              prev.set("page", `${+currentPageNumber - 1}`);
              prev.set("limit", "10");
              return prev;
            });
          }}
          disabled={currentPageNumber == "1"}
          className="join-item btn"
        >
          {"<"}
        </button>
        <button className="join-item btn btn-active">
          {currentPageNumber}
        </button>
        <button
          onClick={() => {
            setSearchParams((prev) => {
              prev.set("page", `${+currentPageNumber + 1}`);
              prev.set("limit", "10");
              return prev;
            });
          }}
          disabled={currentPageNumber == "7"}
          className="join-item btn"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
