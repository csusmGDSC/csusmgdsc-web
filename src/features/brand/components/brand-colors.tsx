import BrandColor from "../components/brand-color";

const mainColors = [
  { colorName: "Blue 500", colorCode: "#4285f4" },
  { colorName: "Green 500", colorCode: "#34a853" },
  { colorName: "Yellow 600", colorCode: "#f9ab00" },
  { colorName: "Red 500", colorCode: "#ea4335" },
];

const secondaryColors = [
  { colorName: "Blue 300", colorCode: "#8ab4f8" },
  { colorName: "Green 300", colorCode: "#81c995" },
  { colorName: "Yellow 200", colorCode: "#fde293" },
  { colorName: "Red 300", colorCode: "#f28b82" },
];

const BrandColors = () => {
  return (
    <>
      <div>
        <p className="font-bold p-1">Main Colors:</p>
        <ul className="">
          {mainColors.map((color, index) => (
            <li key={index} className="flex w-full p-2 items-center gap-4">
              <BrandColor
                colorCode={color.colorCode}
                colorName={color.colorName}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-bold p-1">Secondary Colors:</p>
        <ul>
          {secondaryColors.map((color, index) => (
            <li key={index} className="flex w-full p-2 items-center gap-4">
              <BrandColor
                colorCode={color.colorCode}
                colorName={color.colorName}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BrandColors;
