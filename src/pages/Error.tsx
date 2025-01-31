import ErrorFetch from "@components/feedback/Error/ErrorFetch"
const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ErrorFetch error="404 - Page Not Found"/>
    </div>
  )
}

export default Error