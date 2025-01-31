import ErrorFetch from "../Error/ErrorFetch";
import ProjectCardSkeletons from "../Skeletons/ProjectCardSkeletons";

const Loading = ({
  status,
  error,
  children,
}: {
  status: string;
  error: string | null;
  children: React.ReactNode;
}) => {
  if (status === "pending") {
    return <ProjectCardSkeletons />;
  }
  if (status === "rejected") {
    return <ErrorFetch error={error as string}/>;
  }

  return <>{children}</>;
};

export default Loading;
