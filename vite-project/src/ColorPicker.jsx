import { useState } from 'react'

export default function ColorPicker() {

const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
const [focusedIndex, setFocusedIndex] = useState(null);

const colors = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Emerald", hex: "#4CB963"},
  { name: "Citron", hex: "#E1CE7A"},
  { name: "Mauve", hex: "#DABFFF"},
  { name: "Tea Green", hex: "#D1F5BE"},
  { name: "Mimi Pink", hex: "#FECEF1"}
];


// components to be used

// function that should return the color and the hex when hover + click
function handleClick(color) {
    setSelectedColor({hex: color.hex, name: color.name});
}

// when over show hex of color
function handleMouseEnter(hex) {
    setFocusedIndex({hex, name: null});
}

// hide the name and hex of color
function handleMouseLeave() {
    setFocusedIndex({hex: null, name: null});
}

function handleFocus(index) {
    setFocusedIndex(index);
}

function handleBlur() {
    setFocusedIndex(null);
}

function handleKeyDown(e, index) {
    if(e.key === " " || e.key === "SpaceBar") {
        e.preventDefault();
        handleClick(colors[index])
    }
}

return (
  <div className="color-picker">
    <h1>Color Picker</h1>
    
    {selectedColor.hex && (
      <div className="hex-display">
        {selectedColor.name}: <strong>{selectedColor.hex}</strong>
      </div>
    )}
    
    <div className="color-list">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color-item ${focusedIndex === index ? 'focused' : ''}`}
          style={{ backgroundColor: color.hex }}
          onClick={() => handleClick(color)}
          onMouseEnter={() => handleMouseEnter(color.hex)}
          onMouseLeave={handleMouseLeave}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
          onKeyDown={(e) => handleKeyDown(e, index)}
          tabIndex={0}
        />
      ))}
    </div>
  </div>
);
}
