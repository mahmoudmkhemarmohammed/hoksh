const LazyImg = ({
  src,
  alt,
  className,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  className?: string;
}) => {
  return <img src={src} alt={alt} className={className} loading={loading} />;
};

export default LazyImg;
