import React, { useEffect, useState } from "react";
const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
const SpellCheckSection=()=>{
    const [inputText,setInputtext]=useState("")
    const [suggestedText,setSuggestedtext]=useState("")
    const setWords=()=>{
        
    }
  const handleInputChange = (e) => {
    setInputtext(e.target.value);
    setWords();
  }
  useEffect(()=>{
    const words = inputText.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });
    const firstCorrection = correctedWords.find(
        (word, index) => word !== words[index]
      );
      setSuggestedtext(firstCorrection|| " ");
  },[inputText])
    return (
      <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText.length>1 && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
      </div>
    );
  }


export default SpellCheckSection;
