import React from "react";
import { FiSettings, FiCrosshair } from "react-icons/fi";

function Navigation({ setOpenSetting }) {
  return (
    <>
      <nav className="text-white pt-5 flex justify-between w-11/12 mx-auto">
        <div className="flex gap-1 items-center cursor-pointer">
          <FiCrosshair className="text-sm" />
          <h2 className="">Daily Focus</h2>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <FiSettings
            className="text-xl hover:text-gray-300"
            onClick={() => setOpenSetting(true)}
          />
        </div>
      </nav>
    </>
  );
}

{/* Using memo for some optimization (not to rebuild) */}
export default React.memo(Navigation);
