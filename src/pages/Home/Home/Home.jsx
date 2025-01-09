import { MdOutlineNoteAlt } from "react-icons/md";
import note from "../../../assets/image/note.jpg";

const Home = () => {
  return (
    <div className="container mx-auto pt-5">
      {/* Left Side section  */}
      <section className="w-1/4 bg-indigo-50 rounded-xl border-2">
        <div>
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
            <div className="bg-indigo-50 rounded-lg flex">
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
                <div className="border-l-2 border-gray-300 h-16 mx-4"></div>{" "}
                <div className="text-center">
                  <p className="text-white bg-green-600 p-1 w-fit rounded mx-auto">{`76%`}</p>
                  <p className="text-green-600">ACCURACY</p>
                </div>
              </div>
            </div>

            {/* second div */}
            <div className="bg-indigo-50 rounded-lg ">
              <div className="flex">
                <div className="p-2">
                  <MdOutlineNoteAlt className="bg-indigo-200 text-4xl p-2 rounded-lg" />
                </div>
                <div className="p-2">
                  <p className=" rounded-lg text-xs px-1 text-gray-500">
                    Top Scored
                  </p>
                  <div className="flex items-end">
                    <p className="font-bold text-xl leading-none">230</p>
                    <p className="text-xs leading-3 ml-1 self-end">/240</p>
                  </div>
                </div>
              </div>
              <hr className="mx-1 p-2 " />
              <div className="px-2  flex ">
                <p className="text-gray-400 text-sm">
                  By <span className="text-black">Parth Akotkar</span>
                </p>
                <p className="text-white bg-green-600 p-1 w-fit rounded mx-auto">{`92% ACCURACY`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
