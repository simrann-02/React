import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  // error could be anything (string, object), so better to check and fallback
  const message = error?.message || error?.statusText || String(error);

  return (
    <div>
      <h1>Error Occurred</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
