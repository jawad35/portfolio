const permission = () => {
  return (
    <div className="flex items-center justify-center w-10 mx-auto bg-gray-300 h-96">
      <div className="p-5 mx-auto ">
        Sorry! You don't have permission to see github link of this
        project.Please contact administrator{" "}
        <button
          className="p-1 bg-blue-400 rounded-lg"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=024jawadali@gmail.com"
            )
          }
        >
          Email me
        </button>{" "}
        if you want to get the source code.
      </div>
    </div>
  );
};

export default permission;
