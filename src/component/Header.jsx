import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANG } from "../utils/constants";
import { toogleGptSearch } from "../utils/gptSlice";
import { changeLang } from "../utils/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    //toggle
    dispatch(toogleGptSearch());
  };
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-full bg-linear-to-b from-black to-transparent flex justify-between z-20">
      <div className="w-60 px-6 py-2 ml-4">
        <img src={LOGO} alt="Netflix logo" className="w-full" />
      </div>
      {user && (
        <div className="m-4 p-4 flex gap-4">
          {showGptSearch && (
            <select
              className="bg-gray-900 p-2 text-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="px-4 bg-purple-700 text-white rounded-md cursor-pointer"
            onClick={handleGptSearch}
          >
           {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <div className="bg-blue-600 w-10 h-10 rounded-full border border-black"></div>
          <button
            className="bg-red-600 text-white font-bold cursor-pointer px-4 rounded-md"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
