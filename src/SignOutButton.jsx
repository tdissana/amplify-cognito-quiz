import { signOut } from "aws-amplify/auth";

function SignOutButton() {
  return (
    <div className="absolute top-4 right-4 z-50">
      <button
        onClick={signOut}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-200"
      >
        Sign Out
      </button>
    </div>
  );
}

export default SignOutButton;
