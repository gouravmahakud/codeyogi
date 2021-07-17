import { FC, memo } from "react";
import { useEffect } from "react";

interface Props {}

const AuthHero: FC<Props> = (props) => {
    console.log("AuthHero rendering");
    useEffect(() => {
        console.log("AuthHero rendering for the first time");
    }, []);

    return (
      <div className="h-screen w-1/2 bg-black text-white">
        <svg
          className="w-56 h-56 text-white text-center mx-auto my-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          ></path>
        </svg>
      </div>
    );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);
