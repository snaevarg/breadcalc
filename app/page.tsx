
'use client'
import { useState, useEffect } from "react";
import "node_modules/flag-icons/css/flag-icons.min.css";
import React from "react";
import { ThemeProvider, useTheme } from "next-themes";

export default function BreadPage() {
  // Initial values for the bread dough ingredients.
  const initialFlour = 500;
  const initialWater = 350;
  const initialSaltPercentage = 2;
  const initialYeastPercentage = 1.4;
  const initialHydration = 70;

  // States for the bread dough ingredients.
  const [flour, setFlour] = useState(initialFlour);
  const [water, setWater] = useState(initialWater);
  const [salt, setSalt] = useState(flour * (initialSaltPercentage / 100));
  const [yeast, setYeast] = useState(flour * (initialYeastPercentage / 100));
  const [hydration, setHydration] = useState(initialHydration);
  const [saltPercentage, setSaltPercentage] = useState(initialSaltPercentage);
  const [yeastPercentage, setYeastPercentage] = useState(initialYeastPercentage);
  const [yeastType, setYeastType] = useState("dry");

  // State for the language.
  const [language, setLanguage] = useState("english");

  // State to track component mounting.
  const [isMounted, setIsMounted] = useState(false);

  // State for the theme.
  const { theme, setTheme } = useTheme(); 

  useEffect(() => {
    setTheme("light"); // Set light mode as the default theme
  }, []); // Run only once when the component mounts

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setIsMounted(true); // Component is mounted
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Run only after the component is mounted
      setTheme("light"); // Set light mode as the default theme
    }
  }, [isMounted, setTheme]);

  // Set the hydration percentage.
  useEffect(() => {
    setWater(flour * (hydration / 100));
  }, [flour, hydration]);

  // Set the salt percentage.
  useEffect(() => {
    setSalt(flour * (saltPercentage / 100));
  }, [flour, saltPercentage]);

  // Set the yeast percentage.
  useEffect(() => {
    setYeast(flour * (yeastPercentage / 100));
  }, [flour, yeastPercentage]);

  // Reset all values to their initial values.
  const handleReset = () => {
    setFlour(initialFlour);
    setWater(initialWater);
    setSalt(flour * (initialSaltPercentage / 100));
    setYeast(flour * (initialYeastPercentage / 100));
    setHydration(initialHydration);
    setSaltPercentage(initialSaltPercentage);
    setYeastPercentage(initialYeastPercentage);
    setYeastType("dry");
  };

  // Switch the yeast type and set the yeast amount accordingly.
  const handleYeastTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYeastType(e.target.value);
    if (e.target.value === "dry") {
      setYeast(initialFlour * (initialYeastPercentage / 100));
      setYeastPercentage(initialYeastPercentage);
    } else if (e.target.value === "fresh") {
      setYeast(initialFlour * (2 / 100));
      setYeastPercentage(2);
    } else if (e.target.value === "sourdough") {
      setYeast(initialFlour * (15 / 100));
      setYeastPercentage(15);
    }
  };

  // Switch between languages.
  const handleLanguageSwitch = () => {
    const newLanguage = language === "english" ? "icelandic" : "english";
    setLanguage(newLanguage);
  };

  // Variables for all the text, to be able to flip between languages.
  const titleText = language === "english" ? "Bread Dough Calculator" : "Reiknivél Fyrir Brauðdeig"
  const gramsText = language === "english" ? "grams" : "grömm";
  const flourText = language === "english" ? "Flour" : "Hveiti";
  const waterText = language === "english" ? "Liquid" : "Vökvi";
  const optionsText = language === "english" ? "Options" : "Valmöguleikar";
  const hydrationLabelText = language === "english" ? "Hydration" : "Vökvahlutfall";
  const saltPercentageText = language === "english" ? "Salt Percentage" : "Salthlutfall";
  const yeastPercentageText = language === "english" ? "Yeast Percentage" : "Gerhlutfall";
  const sourdoughPercentageText = language === "english" ? "Sourdough Percentage" : "Súrdeigshlutfall";
  const saltLabelText = language === "english" ? "Salt" : "Salt";
  const yeastLabelText = language === "english" ? "Yeast" : "Ger";
  const yeastTypeText = language === "english" ? "Yeast Type" : "Gertegund";
  const dryYeastText = language === "english" ? "Dry Yeast" : "Þurrger";
  const freshYeastText = language === "english" ? "Fresh Yeast" : "Pressuger";
  const sourdoughText = language === "english" ? "Sourdough" : "Súrdeig";
  const resetText = language === "english" ? "Reset" : "Endurræsa";

  return (
    <ThemeProvider defaultTheme="light">
      <div className="w-full max-w-2xl px-4 py-8">
        <div className="bg-white border-8 border-neo-black shadow-brutal-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-8 text-neo-black uppercase tracking-tight bg-neo-pink px-4 py-3 border-4 border-neo-black shadow-brutal inline-block">
            {titleText}
          </h1>

          {/* Ingredients Section */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="input-container">
              <label className="block text-neo-black text-lg font-bold mb-3 uppercase">
                {flourText}
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full py-4 px-4 text-2xl font-bold border-4 border-neo-black shadow-brutal bg-white text-neo-black focus:outline-none focus:shadow-brutal-lg transition-shadow"
                  value={flour.toFixed(0)}
                  onChange={(e) => setFlour(Number(e.target.value))}
                />
                <span className="absolute bottom-4 right-4 text-neo-black text-sm font-bold uppercase">
                  {gramsText}
                </span>
              </div>
            </div>

            <div className="input-container">
              <label className="block text-neo-black text-lg font-bold mb-3 uppercase">
                {waterText}
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full py-4 px-4 text-2xl font-bold border-4 border-neo-black shadow-brutal bg-neo-cyan text-neo-black focus:outline-none focus:shadow-brutal-lg transition-shadow"
                  value={water.toFixed(0)}
                  onChange={(e) => setWater(Number(e.target.value))}
                  readOnly
                />
                <span className="absolute bottom-4 right-4 text-neo-black text-sm font-bold uppercase">
                  {gramsText}
                </span>
              </div>
            </div>

            <div className="input-container">
              <label className="block text-neo-black text-lg font-bold mb-3 uppercase">
                {saltLabelText}
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full py-4 px-4 text-2xl font-bold border-4 border-neo-black shadow-brutal bg-neo-lime text-neo-black focus:outline-none focus:shadow-brutal-lg transition-shadow"
                  value={salt.toFixed(0)}
                  onChange={(e) => setSalt(Number(e.target.value))}
                  readOnly
                />
                <span className="absolute bottom-4 right-4 text-neo-black text-sm font-bold uppercase">
                  {gramsText}
                </span>
              </div>
            </div>

            <div className="input-container">
              <label className="block text-neo-black text-lg font-bold mb-3 uppercase">
                {yeastType === "sourdough" ? sourdoughText : yeastLabelText}
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  className="w-full py-4 px-4 text-2xl font-bold border-4 border-neo-black shadow-brutal bg-neo-orange text-neo-black focus:outline-none focus:shadow-brutal-lg transition-shadow"
                  value={yeast.toFixed(0)}
                  onChange={(e) => setYeast(Number(e.target.value))}
                  readOnly
                />
                <span className="absolute bottom-4 right-4 text-neo-black text-sm font-bold uppercase">
                  {gramsText}
                </span>
              </div>
            </div>
          </div>

          {/* Options Section */}
          <div className="bg-neo-purple border-4 border-neo-black shadow-brutal p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6 text-neo-black uppercase">
              {optionsText}
            </h2>

            <div className="mb-6">
              <label className="block mb-3 text-neo-black font-bold text-lg uppercase">
                {hydrationLabelText}: <span className="bg-neo-yellow px-2 py-1 border-2 border-neo-black">{hydration}%</span>
              </label>
              <input
                type="range"
                min={40}
                max={110}
                value={hydration}
                onChange={(e) => setHydration(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-3 text-neo-black font-bold text-lg uppercase">
                {saltPercentageText}: <span className="bg-neo-yellow px-2 py-1 border-2 border-neo-black">{saltPercentage}%</span>
              </label>
              <input
                type="range"
                min={1.5}
                max={2.5}
                step={0.1}
                value={saltPercentage}
                onChange={(e) => setSaltPercentage(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-3 text-neo-black font-bold text-lg uppercase">
                {yeastType === "dry"
                  ? `${yeastPercentageText}: `
                  : yeastType === "fresh"
                  ? `${yeastPercentageText}: `
                  : `${sourdoughPercentageText}: `}
                <span className="bg-neo-yellow px-2 py-1 border-2 border-neo-black">{yeastPercentage}%</span>
              </label>
              <input
                type="range"
                min={yeastType === "dry" ? 0.3 : yeastType === "fresh" ? 0.7 : 2}
                max={yeastType === "dry" ? 2.5 : yeastType === "fresh" ? 5 : 50}
                step={yeastType === "dry" ? 0.1 : yeastType === "fresh" ? 0.1 : 1}
                value={yeastPercentage}
                onChange={(e) => setYeastPercentage(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-3 text-neo-black font-bold text-lg uppercase">
                {yeastTypeText}:
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 text-neo-black font-bold text-base cursor-pointer">
                  <input
                    type="radio"
                    value="dry"
                    checked={yeastType === "dry"}
                    onChange={handleYeastTypeChange}
                    name="yeastType"
                  />
                  <span>{dryYeastText}</span>
                </label>
                <label className="flex items-center gap-3 text-neo-black font-bold text-base cursor-pointer">
                  <input
                    type="radio"
                    value="fresh"
                    checked={yeastType === "fresh"}
                    onChange={handleYeastTypeChange}
                    name="yeastType"
                  />
                  <span>{freshYeastText}</span>
                </label>
                <label className="flex items-center gap-3 text-neo-black font-bold text-base cursor-pointer">
                  <input
                    type="radio"
                    value="sourdough"
                    checked={yeastType === "sourdough"}
                    onChange={handleYeastTypeChange}
                    name="yeastType"
                  />
                  <span>{sourdoughText}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex gap-4 items-center flex-wrap">
            <button
              className="bg-neo-pink text-neo-black font-bold text-lg uppercase py-3 px-8 border-4 border-neo-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all"
              onClick={handleReset}
            >
              {resetText}
            </button>

            <button
              className="bg-white border-4 border-neo-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all p-2"
              onClick={toggleDarkMode}
            >
              {isMounted && (theme === "light" ? <span className="text-4xl">🌙</span> : <span className="text-4xl">☀️</span>)}
            </button>

            <button
              className="bg-white border-4 border-neo-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all"
              onClick={handleLanguageSwitch}
            >
              <span className={`fi fis ${language === "english" ? "fi-is" : "fi-gb"} fiCircle`} />
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}