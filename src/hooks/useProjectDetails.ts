import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TCard } from "src/types/card.type";

const useProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<TCard | null>(null);
  const [loading, setLoading] = useState<
    "pending" | "idle" | "fulfilled" | "rejected"
  >("idle");
  const [error, setError] = useState<string | null>();

  
  useEffect(() => {
    const fetchData = async (projectId: string) => {
      setLoading("pending");
      try {
        const res = await axios.get(`/projects/${projectId}`);
        setProject(res.data);
        setLoading("fulfilled");
      } catch (error) {
        setLoading("rejected");
        setError(axiosErrorHandler(error));
      }
    };
    fetchData(id as string);
  }, [id]);
  return { project, loading, error };
};

export default useProjectDetails;
