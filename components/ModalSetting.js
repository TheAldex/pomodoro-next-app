import React from "react";
import { FiX } from "react-icons/fi";

function ModalSetting({
  openSetting,
  setOpenSetting,
  pomodoroRef,
  shortBreakRef,
  longBreakRef,
  updateTimeDefaultValue,
}) {
  const options = [
    {
      value: "Pomodoro",
      ref: pomodoroRef,
      defaultValue: 25,
    },
    {
      value: "Short Break",
      ref: shortBreakRef,
      defaultValue: 5,
    },
    {
      value: "Long Break",
      ref: longBreakRef,
      defaultValue: 10,
    },
  ];

  return (
    <>
      <div
        className={`absolute h-full w-full mx-auto left-0 top-0 bg-white bg-opacity-20 ${
          openSetting ? "" : "hidden"
        }`}
        onClick={() => setOpenSetting(false)}
      ></div>
      <div
        className={`max-w-xl  mx-auto absolute bg-white w-11/12 sm:w-96 p-5 left-1/2 top-1/2 rounded-md ${
          openSetting ? "" : "hidden"
        }`}
        style={{
          transform: "translate(-50%,-50%)",
        }}
      >
        <div className="flex justify-between">
          <h1 className="uppercase font-bold tracking-wider text-gray-800">
            Timer setting
          </h1>
          <FiX
            className="text-gray-800 hover:text-red-500 text-2xl cursor-pointer font-bold"
            onClick={() => setOpenSetting(false)}
          />
        </div>

        <div className="h-1 w-full bg-gray-800 mt-5 mb-5"></div>
        <div className="flex gap-5">
          {options.map(({ value, defaultValue, ref }, index) => {
            return (
              <div key={index}>
                <h1 className="text-gray-800 text-sm">{value}</h1>
                <input
                  defaultValue={defaultValue}
                  type="number"
                  className="w-full bg-gray-400 bg-opacity-30 py-2 text-center rounded"
                  ref={ref}
                />
              </div>
            );
          })}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-400 uppercase w-full mt-5 text-white rounded py-2"
          onClick={() => {
            updateTimeDefaultValue();
			setOpenSetting(false);
          }}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default React.memo(ModalSetting);
