import Footer from "@/components/footer";
import Navbar from "@/components/header";
import Image from "next/image";

export default function Book() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="flex flex-col ">
        <div className="flex justify-center items-center w-full h-60">
          <div className="">
            <section>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Livraria MoonLight"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                      <p className="leading-relaxed text-base"></p>

                      <div className="md:flex font-bold text-gray-800">
                        <div className="w-full md:w-1/2 flex space-x-3">
                          <div className="w-1/2">
                            <h2 className="text-gray-500">Titulo:</h2>
                          </div>
                          <div className="w-1/2">
                            <h2 className="text-gray-500">Restrição:</h2>
                            <p>Idade 18</p>
                          </div>
                        </div>
                        <div className="w-full md:w-40+++++++++++++++++++++++++++++++++++++++++++++ flex space-x-3">
                          <div className="w-40">
                            <h2 className="text-gray-500">Roteiro:</h2>
                            <p>
                              bla bla bla bla bla bla bla bla bla bla bla bla
                              bla bla bla bla bla bla bla bla bla bla bla bla
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
        <div className="flex">
          <div className="h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="postContent"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Poste um comentario:
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-indigo-500"
                    placeholder="Qual a sua opinião sobre o livro?"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="flex justify-center items-center bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo-600  text-white py-2 px-4 rounded-md transition duration-300 gap-2"
                  >
                    {" "}
                    Post{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      id="send"
                      fill="#fff"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>03</div>
      </div>
      <Footer />
    </>
  );
}
