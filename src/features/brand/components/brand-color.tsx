interface BrandColorProps {
  colorName: string;
  colorCode: string;
}

const BrandColor: React.FC<BrandColorProps> = ({ colorName, colorCode }) => {
  return (
    <>
      <p >
        {colorName}
      </p>
      <p className="font-bold" style={{ color: colorCode }}>{colorCode}</p>
    </>
  );
};

export default BrandColor;
