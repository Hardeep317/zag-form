import { Inter } from "next/font/google";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineMail } from "react-icons/ai";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [file, setFile] = useState({
    fileName: "",
    fileContent: "",
  });
  const [isJson, setIsJson] = useState("");
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('Hardeep');
  const [mail, setMail] = useState('harry@gmail.com');


  return (
    <div className="min-h-screen">
      <div className="w-11/12 m-auto mt-7">
        <div className="flex items-center mb-5">
          <AiOutlineArrowLeft className="text-2xl font-normal" />
          <p className="text-xl font-bold ml-5">Submit form</p>
        </div>

        <div>
          <p className="mb-4 font-normal text-[16px]">Full Name</p>
          <input
          value={name}
          onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="w-full outline-0 bg-gray-100 p-3 text-sm rounded-md"
          />
        </div>
        <div className="mt-6">
          <p className="mb-4 font-normal text-[16px]">Email</p>
          <input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full outline-0 bg-gray-100 p-3 text-sm rounded-md"
          />
          <AiOutlineMail className="absolute right-7 lg:right-[620px] top-[235px] text-xl text-gray-400" />
        </div>
        <div className="mt-6">
          <p className="mb-4 font-normal text-[16px]">Upload JSON File</p>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100  "
          >
            <div className="flex flex-col items-center justify-center text-center pt-5 pb-6">
              {isJson !== "validating" ? (
                <div className="flex flex-col items-center justify-center text-center pt-5 pb-6">
                  {" "}
                  <BsFillFileEarmarkArrowUpFill className="text-3xl text-blue-500" />
                  <p className="text-[11px] text-gray-400 font-semibold">
                    Browse File
                  </p>
                </div>
              ) : (
                <div>
                  <div
                    className="flex flex-col items-center justify-center text-center pt-5 pb-6"
                    role="status"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>

                  <p className="text-md text-blue-500">Validating...</p>
                </div>
              )}
            </div>

            <input
              id="dropzone-file"
              onChange={(e) => {
                setIsJson("validating");
                const data = e.target.files[0];
                const fileReader = new FileReader();
                fileReader.readAsText(data);
                fileReader.onload = () => {
                  setFile({
                    fileName: data.name,
                    fileContent: JSON.parse(JSON.stringify(fileReader.result)),
                  });
                  setCount(JSON.parse(JSON.stringify(fileReader.result)).length);
                  if (data.name.includes(".json")) {
                    setIsJson(true);
                  } else {
                    setIsJson(false);
                  }
                };
                fileReader.onerror = () => {
                  console.log("File error ", fileReader.error);
                };
              }}
              type="file"
              className="hidden"
            />
          </label>
        </div>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto text-center max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col min-w-11/12 m-auto bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto text-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTs1mma4bSMsl2Lt-rrnZ-utf2gDugIJ3zA&usqp=CAU"
                      className="w-44 m-auto"
                      alt=""
                    />
                    <p className="text-blue-800 font-bold">Success!</p>
                    <p className="mt-2 font-semibold">{count} entries successfully uploaded </p>
                    <button
                      onClick={() => {
                        setFile({ fileName: "", fileContent: "" });
                        setIsJson("");
                        setShowModal(false);
                      }}
                      className="w-full py-3 rounded-3xl bg-blue-600 text-white mt-2"
                    >
                      Go to My Entries
                    </button>
                    <button
                      onClick={() => {
                        setFile({ fileName: "", fileContent: "" });
                        setIsJson("");
                        setShowModal(false);
                      }}
                      className="w-full py-3 rounded-3xl bg-gray-200 text-blue-700 mt-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        {isJson === false ? alert("Please Choose a JSON File") : null}
        <div className="mt-6">
          <p className="mb-4 font-normal text-[16px]">File Contents</p>
          {isJson === true && (
            <pre className="w-11/12 overflow-auto text-sm">
              {file.fileContent}
            </pre>
          )}
        </div>

        <div className="w-[294px] m-auto fixed bottom-0 p-3 bg-white mt-14">
          {isJson === true && name.length > 3 && mail.length > 5  ? (
            <button
              className="w-full py-3 rounded-3xl bg-blue-600 text-white"
              onClick={() => {
                setShowModal(true);
              }}
              type="button"
            >
              Submit
            </button>
          ) : (
            <button
              className="w-full py-3 rounded-3xl bg-blue-400 text-white"
              type="button"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
