
export default function NotAuthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-600">
        🚫 You are not authorized to view this page.
      </h1>
      <p className="mt-2 text-gray-600">
        Please log in with an admin account to continue.
      </p>
    </div>
  );
}
