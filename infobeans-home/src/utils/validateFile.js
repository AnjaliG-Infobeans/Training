const getExtention = (filename) => {
  const parts = filename.split(".");
  return parts[parts.length - 1];
};
const validateFileType = (filename) => {
  const ext = getExtention(filename);

  switch (ext.toLowerCase()) {
    case "jpeg":
    case "jpg":
    case "png":
    case "pdf":
      return true;
    default:
      return false;
  }
};

export default validateFileType;
