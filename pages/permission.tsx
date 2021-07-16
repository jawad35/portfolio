const permission = () => {
  return (
    <div className="flex items-center justify-center mx-auto w-96 h-96">
      <div>
        <h4 className="p-3 text-2xl bg-gray-200">
          <b>
            Sorry! You don't have permission to see github link of this
            project.Please contact administrator (024jawadali@gmail.com) if you
            want to get the source code.
          </b>
        </h4>
        <div className="text-center">
          <b className="text-2xl ">Thank you</b>
        </div>
      </div>
    </div>
  );
};

export default permission;
