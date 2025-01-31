import axiosErrorHandler from "@utils/axiosErrorHandler";
import scrollHandler from "@utils/scrollHandler";
import axios from "axios";
import { useEffect, useState } from "react";

const usePortfolio = () => {
  const [perfix, setPerfix] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState<
    "pending" | "idle" | "fulfilled" | "rejected"
  >("idle");

  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const perfixHandler = (value: string) => {
    scrollHandler("portfolio")
    setPerfix(value);
    setPage(1)
  };

  const arrayFromTotalPage = Array(total)
    .fill(0)
    .map((_, i) => i + 1);

  const handelPagination = (pageNumber: number) => {
    setPage(pageNumber);
    scrollHandler("portfolio")
  };

  const handelPrevAndNextButton = (typeBtnAction: string) => {
    if (typeBtnAction === "prev") {
      setPage((prev) => (prev > 1 ? --prev : 1));
      scrollHandler("portfolio")
    } else {
      setPage((prev) => (prev < total ? ++prev : total));
      scrollHandler("portfolio")
    }
  };

  useEffect(() => {
    const res =
      perfix !== ""
        ? `/projects?projectPerfix=${perfix}&_page=${page}&_limit=6`
        : `/projects?_page=${page}&_limit=6`;

    const fetchData = async () => {
      setLoading("pending");

      try {
        const response = await axios.get(res);

        setProjects(response.data);

        setLoading("fulfilled");

        setTotal(Math.ceil(response.headers["x-total-count"] / 6));
      } catch (error) {
        setLoading("rejected");
        setError(axiosErrorHandler(error));
      }
    };
    fetchData();
  }, [perfix, page]);

  return {
    projects,
    perfix,
    perfixHandler,
    loading,
    error,
    page,
    total,
    arrayFromTotalPage,
    handelPagination,
    handelPrevAndNextButton,
  };
};

export default usePortfolio;
