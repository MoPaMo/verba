import { ErrorPage } from "@/components/error-page";

export default function Custom404() {
  return (
    <ErrorPage
      title="Page Not Found"
      message="Oops! Looks like you've wandered into uncharted territory. Let's get you back on track!"
      emoji="🗺️"
    />
  );
}
