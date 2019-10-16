export const home = (req, res) => res.render("Home", { pageTitle: "Home" });
export const search = (req, res) =>
  res.render("Search", { pageTitle: "Search" });

export const upload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("Video Detail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("Delete Video", { pageTitle: "Delete Video" });
