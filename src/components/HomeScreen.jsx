import React, { useEffect, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { BsChevronDown } from "react-icons/bs";
import axios from "axios";
import PokemonDetailScreen from "./PokemonDetailScreen";
import Modal from "@mui/material/Modal";
import { GoSettings } from "react-icons/go";
import { FiXCircle } from "react-icons/fi";

function HomeScreen() {
  const [pokemonData, setPokemonData] = useState();
  const [fetchPokemonData, setFetchPokemonData] = useState();
  const [openMobModal, setOpenMobModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [pokemonId, setPokemonId] = useState();

  //   =============function to fetch all pokemons=============//
  const fetchPokemon = async () => {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const results = data.data.results;
    const newData = results.map((x, index) => {
      const arr = {
        ...x,
        id: index + 1,
      };
      return arr;
    });
    setFetchPokemonData(newData);
    setPokemonData(newData);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const searchPokemonHandler = (e) => {
    const searchedPokemon = fetchPokemonData?.filter(
      (x) => x.name === e.target.value || x.id == e.target.value
    );

    if (searchedPokemon?.length > 0) {
      setPokemonData(searchedPokemon);
    } else {
      setPokemonData(fetchPokemonData);
    }
  };

  // const fetchGender = async () => {
  //   const data = await axios.get(`https://pokeapi.co/api/v2/gender/1/`);
  //   const newData = await axios.get(`https://pokeapi.co/api/v2/gender/2/`);

  //   let i = 0;
  //   const genderArrMale = [];
  //   const genderArrFemale = [];
  //   for (i; i < 20; i++) {
  //     genderArrMale.push(data.data.pokemon_species_details[i]);
  //     genderArrFemale.push(newData.data.pokemon_species_details[i]);
  //   }
  //   // console.log("genderMale", genderArrMale);
  //   // console.log("genderFemale", genderArrFemale);
  //   setMaleGender(genderArrMale);
  //   setFemaleGender(genderArrFemale);
  // };

  useEffect(() => {
    fetchPokemon();
    // fetchGender();
  }, []);

  const DetailPageHandler = (id) => {
    setOpen(!open);
    setPokemonId(id);
  };

  const modalCloseHandler = () => {
    setOpen(false);
  };

  const handleToggleMobHandler = () => {
    setOpenMobModal(true);
  };

  const handleMobModal = () => {
    setOpenMobModal(!openMobModal);
  };

  return (
    <div
      style={{ backgroundColor: "#ebf5f7" }}
      className="min-h-screen px-6 lg:px-16 pt-8 lg:pt-12 pb-6">
      {/* =========================Name and Tag========================= */}
      <div className="flex justify-start lg:border-none border-b border-gray-800 text-center">
        <div className="lg:text-4xl text-2xl font-bold tracking-wider flex py-2 items-center justify-center text-gray-700 pr-6    lg:border-gray-400 lg:border-r-2">
          <p className="">Pok&#233;dex</p>
        </div>
        <p className="pl-6 hidden lg:block text-gray-500 text-xl font-semibold tracking-wide py-4">
          Search for any pok&#233;mon that exists in the planet
        </p>
      </div>
      <p className="text-sm mt-1 text-gray-500 lg:hidden">
        Search for any pok&#233;mon that exists in the planet
      </p>

      {/* =======================Search bar /Type/Gender/stats=============== */}
      <div className="lg:grid lg:grid-cols-2 grid-cols-4 grid gap-x-6 lg:gap-x-8 mt-8">
        {/* ===============Search bar================ */}
        <div className="col-span-3 lg:col-span-1">
          <p className="pl-3 hidden lg:block  text-gray-600 text-lg">
            Search by
          </p>
          <div
            style={{ backgroundColor: "#cee7ed", height: "8vh" }}
            className="flex  px-4 items-center  rounded-lg">
            <input
              onChange={searchPokemonHandler}
              style={{ backgroundColor: "#cee7ed" }}
              className="w-full  outline-none lg:text-lg tracking-wide "
              placeholder="Name or Number"
            />
            <span className="lg:text-2xl text-lg text-gray-500 -rotate-90">
              <VscSearch />
            </span>
          </div>
        </div>

        <div
          onClick={handleToggleMobHandler}
          className="col-span-1 lg:hidden flex text-2xl justify-center items-center border rounded bg-slate-800 text-white">
          <p style={{ rotate: "90deg" }}>
            <GoSettings />
          </p>
        </div>

        {/* ===========================Type/Gender/Stats================ */}
        <div className="col-span-1 hidden lg:flex justify-around items-center space-x-8">
          {/* ====================Type================== */}
          <div style={{ width: "13vw" }}>
            <p className="text-lg tracking-wide text-gray-600 pl-3">Type</p>
            <div
              style={{ backgroundColor: "#cee7ed", height: "8vh" }}
              className="flex items-center  justify-center space-x-2   text-lg rounded-lg">
              <p className="text-gray-600 text-base">Normal +5 more</p>
              <p className="text-gray-600 mt-1">
                <BsChevronDown />
              </p>
            </div>
          </div>

          {/* ====================Gender================ */}
          <div style={{ width: "13vw" }}>
            <p className="text-lg tracking-wide text-gray-600 pl-3">Gender</p>
            <div
              style={{ backgroundColor: "#cee7ed", height: "8vh" }}
              className="flex items-center  justify-center space-x-2  p-3 text-lg rounded-lg">
              <p className="text-gray-600 text-base">Normal +5 more</p>
              <p className="text-gray-600 mt-1">
                <BsChevronDown />
              </p>
            </div>
          </div>

          {/* ====================Stats================= */}
          <div style={{ width: "13vw" }}>
            <p className="text-lg tracking-wide text-gray-600 pl-3">Stats</p>
            <div
              style={{ backgroundColor: "#cee7ed", height: "8vh" }}
              className="flex items-center  justify-center space-x-2  p-3 text-lg rounded-lg">
              <p className="text-gray-600 text-base">Normal +5 more</p>
              <p className="text-gray-600 mt-1">
                <BsChevronDown />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===========================Pokemon Cards=========================== */}
      <div className="lg:grid lg:grid-cols-6 grid grid-cols-2 lg:gap-8 gap-4 mt-10">
        {pokemonData?.map((x) => (
          <div
            onClick={() => DetailPageHandler(x.id)}
            className=" col-span-1 pt-4 pb-3 flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg border-opacity-70">
            <img
              style={{ height: "21vh", width: "10vw" }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${x.id}.svg`}
              className="hidden lg:block"
            />
            <img
              style={{ height: "24vh", width: "24vw" }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${x.id}.svg`}
              className="block lg:hidden"
            />
            <p className="lg:mt-10 text-lg font-bold tracking-wider">
              {x.name}
            </p>
            {x.id < 10 ? (
              <p className="mt-1 text-lg">00{x.id}</p>
            ) : (
              <p className="mt-1 text-lg">0{x.id}</p>
            )}
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ right: "50%" }}
        className="hidden lg:block">
        <PokemonDetailScreen id={pokemonId} CloseModal={modalCloseHandler} />
      </Modal>

      <Modal
        open={openMobModal}
        onClose={handleMobModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="lg:hidden block px-6 py-8">
        <div className="bg-white rounded pt-3">
          <div className="flex px-3 items-center pb-2 border-b border-gray-300  justify-between">
            <p className="text-xl font-semibold text-slate-700">Filter</p>
            <p onClick={handleMobModal} className="text-xl text-gray-500">
              <FiXCircle />
            </p>
          </div>
          <div className="pb-60 px-3">
            <div className="flex items-center justify-evenly  space-x-8 text-sm border mt-4 border-slate-700 rounded p-2">
              <p
                style={{ width: "60px" }}
                className=" border-r  border-gray-500 font-semibold">
                Type
              </p>
              <p style={{ fontSize: "10px" }} className="text-xs ">
                (Normal +5 more)
              </p>
              <p className="text-xl  text-gray-500 rotate-45">
                <FiXCircle />
              </p>
            </div>

            <div className="flex items-center justify-evenly  space-x-8 text-sm border mt-4 border-slate-700 rounded p-2">
              <p
                style={{ width: "60px" }}
                className=" border-r  border-gray-500 font-semibold">
                Gender
              </p>
              <p style={{ fontSize: "10px" }} className="text-xs ">
                (Normal +5 more)
              </p>
              <p className="text-xl  text-gray-500 rotate-45">
                <FiXCircle />
              </p>
            </div>

            <div className="flex items-center justify-evenly  space-x-8 text-sm border mt-4 border-slate-700 rounded p-2">
              <p
                style={{ width: "60px" }}
                className=" border-r  border-gray-500 font-semibold">
                Stats
              </p>
              <p style={{ fontSize: "10px" }} className="text-xs ">
                (Normal +5 more)
              </p>
              <p className="text-xl  text-gray-500 rotate-45">
                <FiXCircle />
              </p>
            </div>
          </div>
          <div className="shadow-gray-400 flex justify-center items-center space-x-10 shadow py-2 ">
            <button className="border px-6 py-1 rounded-lg border-slate-800 text-sm text-slate-800 font-semibold tracking-wide">
              Reset
            </button>
            <button className="border px-6 py-1 rounded-lg text-sm text-white bg-slate-800 tracking-wide">
              Apply
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default HomeScreen;
