import { FiUploadCloud } from "react-icons/fi";

const UploadPicture = () => {
  return (
    <div className="flex flex-col rounded-2xl w-[11rem] h-12">
      <label className="mb-1 ml-1">
        Picture or Logo
        <span className="text-red-600">*</span>
      </label>
      <input
        type="file"
        className="hidden"
        accept="image/png, image/jpg, image/gif, image/jpeg"
        name="logo"
        id="logo"
      />
      <label
        htmlFor="logo"
        className="bg-white flex items-center w-full cursor-pointer justify-between rounded-lg ovleflow-hidden"
      >
        <div className="h-8 flex justify-center w-3/12 items-center border-r border-gray-300 bg-gray-200 rounded-l-lg">
          <FiUploadCloud className="w-5 h-5 " />
        </div>
        <span className="w-9/12 px-4">Browse files...</span>
      </label>
    </div>
  );
};

export default UploadPicture;
