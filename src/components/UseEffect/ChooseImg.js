import { useEffect, useState } from "react";
const ChoosImage = () => {
  console.log("render");

  const [avt, setAvt] = useState();

  useEffect(() => {
    return () => {
      avt && URL.revokeObjectURL(avt.preview);
    };
  }, [avt]);

  const handleImg = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    file && setAvt(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImg} />
      {avt && <img src={avt.preview} width="80" height="80" />}
    </div>
  );
};
export default ChoosImage;
