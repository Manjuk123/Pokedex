import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "@mui/material/Modal";
import axios from "axios";

function PokemonDetailScreen(props) {
 
  const [pokemonSpecies, setPokemonSpecies] = useState();
  const [heightWeight, setHeightWeight] = useState();

  const fetchDetail = async () => {
    const data =
      await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${props.id}
    `);
    setPokemonSpecies(data.data);
  };



  const fetchHeightWeight = async () => {
    const data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${props.id}/`
    );
    setHeightWeight(data.data);
  };

  useEffect(() => {
    fetchDetail();
    fetchHeightWeight();
  }, []);

  const homePageHandler = () => {
    props.CloseModal();
  };

  return (
    <>
      <div className="justify-center hidden  items-center lg:flex overflow-x-hidden overflow-y-visible fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto  mx-auto mt-96 ">
          {/*content*/}
          <div
            style={{
              backgroundColor: "#ebf5f7",
              width: "50vw",
              minHeight: "100vh",
              maxHeight: "100%",
            }}
            className="border-0 px-8 pt-8  rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
            {/*===============Image , Name , description===============================*/}
            <div className="grid grid-cols-6 gap-x-4 pt-10 ">
              {/* ===============image================ */}
              <div
                style={{ height: "38vh", width: "13vw" }}
                className="col-span-2 px-4 flex justify-center items-center border-2 border-dashed border-gray-600 rounded-lg border-opacity-80">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`}
                />
              </div>

              {/* ===============description and name================== */}
              <div className="col-span-4">
                <div className="flex justify-center items-center space-x-4">
                  <p className="text-3xl font-bold tracking-wide py-2  ">
                    {pokemonSpecies?.name}
                  </p>
                  {pokemonSpecies?.id < 10 ? (
                    <p className="text-3xl  tracking-wide py-2 border-x text-start px-6  border-gray-500 ">
                      00{pokemonSpecies?.id}
                    </p>
                  ) : (
                    <p className="text-3xl  tracking-wide py-2 border-x text-start px-6  border-gray-500 ">
                      0{pokemonSpecies?.id}
                    </p>
                  )}
                  <button
                    onClick={homePageHandler}
                    className="text-xl ml-2 rounded-lg text-gray-600  bg-sky-200  tracking-wide py-2  px-4 ">
                    Go Back
                  </button>
                </div>

                <p
                  style={{ height: "24vh" }}
                  className="px-6 mt-12 text-lg text-gray-800 ">
                  {pokemonSpecies?.flavor_text_entries[0]?.flavor_text}
                  {pokemonSpecies?.flavor_text_entries[3]?.flavor_text}
                </p>
              </div>
            </div>

            {/*================Characterstic Features =====================*/}
            <div className="grid grid-cols-8 mt-16 gap-y-10">
              <div className="col-span-2">
                <p className="text-lg font-semibold text-gray-700">Height</p>
                <p>{heightWeight?.height}</p>
              </div>

              <div className="col-span-2">
                <p className="text-lg font-semibold text-gray-700">Weight</p>
                <p>{heightWeight?.weight}</p>
              </div>

              <div className="col-span-2">
                <p className="text-lg font-semibold text-gray-700">Gender</p>
                <p>gender</p>
              </div>

              <div className="col-span-2">
                <p className="text-lg font-semibold text-gray-700">
                  Egg Groups
                </p>
                <p className="flex items-center space-x-2">
                  {pokemonSpecies?.egg_groups.map((x) => (
                    <p>{x.name}</p>
                  ))}
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-lg font-semibold text-gray-700 ">
                  Abilities
                </p>
                <div className="mt-2 flex space-x-2">
                  {heightWeight?.abilities?.map((x) => (
                    <p>{x.ability.name}</p>
                  ))}
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-lg font-semibold text-gray-700">Types</p>
                <p className="mt-2">
                  <span
                    style={{ backgroundColor: "#EDC2C4" }}
                    className="px-2  py-1 rounded-lg border border-black">
                    Fire
                  </span>
                  <span
                    style={{ backgroundColor: "#B2D2E8" }}
                    className="px-2 ml-2  py-1 rounded-lg border border-black">
                    Flying
                  </span>
                </p>
              </div>

              <div className="col-span-4">
                <p className="text-lg font-semibold text-gray-700">
                  Weak against
                </p>
                <p className="mt-2">
                  <span
                    style={{ backgroundColor: "#FCC1B0" }}
                    className="px-2  py-1 rounded-lg border border-black">
                    Fighting
                  </span>
                  <span
                    style={{ backgroundColor: "#F4D1A6" }}
                    className="px-2 ml-2  py-1 rounded-lg border border-black">
                    Ground
                  </span>
                  <span
                    style={{ backgroundColor: "#C2D4CE" }}
                    className="px-2 ml-2 py-1 rounded-lg border border-black">
                    Steel
                  </span>
                  <span
                    style={{ backgroundColor: "#CBD5ED" }}
                    className="px-2 ml-2  py-1 rounded-lg border border-black">
                    Water
                  </span>
                  <span
                    style={{ backgroundColor: "#C0D4C8" }}
                    className="px-2 ml-2  py-1 rounded-lg border border-black">
                    Grass
                  </span>
                </p>
              </div>
            </div>

            {/* ==============Stats bar=================================== */}
            <div
              style={{ backgroundColor: "#A4DAD4" }}
              className="mt-12 rounded-lg  px-4 pt-6 pb-3">
              <p className="text-2xl text-gray-800 font-bold">Stats</p>
              <div className="grid grid-cols-2 gap-y-4 mt-8">
                <div className="col-span-1 flex items-center">
                  <p style={{ width: "75px" }}>HP</p>
                  {/* ============bar============== */}
                  <p
                    className="ml-2 text-sm px-2 relative"
                    style={{
                      width: "220px",
                      height: "18px",
                      backgroundColor: "#85C7BF",
                    }}>
                    <span className="z-10 relative text-xs flex  text-white">
                      78
                    </span>
                    <p
                      style={{
                        width: "150px",
                        height: "18px",
                      }}
                      className="bg-indigo-900 absolute  top-0 left-0"></p>
                  </p>
                </div>

                <div className="col-span-1 flex items-center">
                  <p style={{ width: "75px" }}>Attack</p>
                  {/* ============bar============== */}
                  <p
                    className="ml-2 text-sm px-2 relative"
                    style={{
                      width: "220px",
                      height: "18px",
                      backgroundColor: "#85C7BF",
                    }}>
                    <span className="z-10 relative text-xs flex  text-white">
                      78
                    </span>
                    <p
                      style={{
                        width: "150px",
                        height: "18px",
                      }}
                      className="bg-indigo-900 absolute  top-0 left-0"></p>
                  </p>
                </div>

                <div className="col-span-1 flex items-center">
                  <p style={{ width: "75px" }}>Defence</p>
                  {/* ============bar============== */}
                  <p
                    className="ml-2 text-sm px-2 relative"
                    style={{
                      width: "220px",
                      height: "18px",
                      backgroundColor: "#85C7BF",
                    }}>
                    <span className="z-10 relative text-xs flex  text-white">
                      78
                    </span>
                    <p
                      style={{
                        width: "150px",
                        height: "18px",
                      }}
                      className="bg-indigo-900 absolute  top-0 left-0"></p>
                  </p>
                </div>

                <div className="col-span-1 flex items-center">
                  <p style={{ width: "75px" }}>Speed</p>
                  {/* ============bar============== */}
                  <p
                    className="ml-2 text-sm px-2 relative"
                    style={{
                      width: "220px",
                      height: "18px",
                      backgroundColor: "#85C7BF",
                    }}>
                    <span className="z-10 relative text-xs flex  text-white">
                      78
                    </span>
                    <p
                      style={{
                        width: "150px",
                        height: "18px",
                      }}
                      className="bg-indigo-900 absolute  top-0 left-0"></p>
                  </p>
                </div>

                <div className="col-span-1 flex items-center">
                  <p style={{ width: "75px" }}>Sp. Attack</p>
                  {/* ============bar============== */}
                  <p
                    className="ml-2 text-sm px-2 relative"
                    style={{
                      width: "220px",
                      height: "18px",
                      backgroundColor: "#85C7BF",
                    }}>
                    <span className="z-10 relative text-xs flex  text-white">
                      78
                    </span>
                    <p
                      style={{
                        width: "150px",
                        height: "18px",
                      }}
                      className="bg-indigo-900 absolute  top-0 left-0"></p>
                  </p>
                </div>

                <div className="col-span-1 flex items-center">
                  <p style={{ width: "75px" }}>Sp. Def.</p>
                  {/* ============bar============== */}
                  <p
                    className="ml-2 text-sm px-2 relative"
                    style={{
                      width: "220px",
                      height: "18px",
                      backgroundColor: "#85C7BF",
                    }}>
                    <span className="z-10 relative text-xs flex  text-white">
                      78
                    </span>
                    <p
                      style={{
                        width: "150px",
                        height: "18px",
                      }}
                      className="bg-indigo-900 absolute  top-0 left-0"></p>
                  </p>
                </div>
              </div>
            </div>

            {/* ================Evolution Chain=========================== */}
            <div className="mt-8 pb-4">
              <p className="text-2xl pl-1 mb-2 font-bold text-gray-800">
                Evolution Chain
              </p>
              <div className="flex items-center justify-evenly">
                <div
                  style={{ height: "38vh", width: "13vw" }}
                  className="col-span-2 px-4 flex justify-center items-center border-2 border-dashed border-gray-600 rounded-lg border-opacity-80">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                      props.id - 1
                    }.svg`}
                  />
                </div>

                <p className="text-4xl text-gray-600">
                  <BsArrowRight />
                </p>

                <div
                  style={{ height: "38vh", width: "13vw" }}
                  className="col-span-2 px-4 flex justify-center items-center border-2 border-dashed border-gray-600 rounded-lg border-opacity-80">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`}
                  />
                </div>

                <p className="text-4xl text-gray-600">
                  <BsArrowRight />
                </p>

                <div
                  style={{ height: "38vh", width: "13vw" }}
                  className="col-span-2 px-4 flex justify-center items-center border-2 border-dashed border-gray-600 rounded-lg border-opacity-80">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                      props.id + 1
                    }.svg`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default PokemonDetailScreen;
