import { MdOutlineNoteAlt } from "react-icons/md";
import note from "../../../assets/image/note.jpg";
import user from "../../../assets/image/user.jpg";
import { LuFileInput } from "react-icons/lu";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Home = () => {
  return (
    <div className="container mx-auto py-5">
      {/* Left Side section  */}
      <section className="w-1/4 bg-indigo-50 rounded-xl border-2">
        <div className="">
          <img src={note} alt="" className="p-7" />
          <h2 className="text-center text-2xl text-indigo-400 font-bold">
            Your Result!
          </h2>
          <p className="text-center text-gray-500">
            Lorem ipsum dolor sit amet{" "}
          </p>

          {/* left section first div */}

          <div className="p-5 m-5 border-2 bg-white rounded-xl">
            {/* first div */}
            <div className="bg-indigo-50 rounded-lg flex mb-4">
              <div className="p-2">
                <MdOutlineNoteAlt className="bg-indigo-200 text-4xl p-2 rounded-lg" />
              </div>
              <div className="p-2">
                <p className="bg-indigo-500 rounded-lg text-xs px-1 text-white">
                  YOU'VE PASSED
                </p>
                <div className="flex items-end">
                  <p className="font-bold text-xl leading-none">136</p>
                  <p className="text-xs leading-3 ml-1 self-end">/240</p>
                </div>
              </div>

              <div className="ml-auto p-2 rounded-lg flex items-center justify-center">
                <div className="border-l-2 border-gray-300 h-9 mx-4"></div>{" "}
                <div className="text-center ">
                  <p className="text-white bg-green-600 p-0.5 w-fit text-xs rounded mx-auto">{`76%`}</p>
                  <p className="text-green-600 text-xs">ACCURACY</p>
                </div>
              </div>
            </div>

            {/* second div */}

            <div className="bg-indigo-50 rounded-lg py-2 ">
              <div className="flex">
                <div className="p-2">
                  <img src={user} alt="" className="w-9 h-9" />
                </div>
                <div className="p-2">
                  <p className="rounded-lg text-xs px-1 text-black">
                    Top Score
                  </p>
                  <div className="flex items-end">
                    <p className="font-bold text-xl leading-none">136</p>
                    <p className="text-xs leading-3 ml-1 self-end">/240</p>
                  </div>
                </div>
              </div>
              <hr className="mx-5 py-2 " />
              <div className="flex justify-between px-5">
                <p className="text-center text-xs text-gray-500 font-bold">
                  By <span className="text-black">Parth Akotkar</span>
                </p>
                <p className="text-white bg-green-600 px-1 w-fit text-xs rounded-lg mx-auto ">{`92% ACCURACY`}</p>
              </div>
            </div>

            {/* third div */}

            <div className="py-2">
              <h2 className="font-bold">Improve your Marks</h2>
              <p className="text-xs text-gray-400 font-bold">
                Improve Your Score By practice more.
              </p>

              <button
                type="button "
                className="bg-indigo-500 text-white w-full rounded mt-8  p-1"
              >
                Practice more
              </button>
            </div>
          </div>

          {/* left section secund div */}

          <div className="p-5 m-5 border-2 bg-white rounded-xl">
            <h2 className="font-bold">Revisit Paper</h2>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="">
              <button
                type="button"
                className="bg-indigo-500 text-white rounded p-1 my-5 w-5/6 flex items-center justify-center gap-2 mx-auto"
              >
                <LuFileInput /> <span>Visit</span>
              </button>
            </div>
            <div className="flex gap-1">
              <AiOutlineExclamationCircle className="text-gray-400" />
              <p className="text-xs text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis sapiente magnam quae{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
