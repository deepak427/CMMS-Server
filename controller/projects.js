import projects from '../models/projects.js'

export const getAllProjects = async (req, res) => {
  try {
    const projectsList = await projects.find();
    return res.status(200).json(projectsList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const addProject = async (req, res) => {
  const { projectCode, projectDescription } = req.body;
  try {
    const existingProject = await projects.findOne({ code: projectCode });
    if (existingProject) {
      return res.status(403).json({
        message: "already exist",
      });
    }

    const addedProject = new projects({
      code: projectCode,
      description: projectDescription,
    });
    await addedProject.save();

    return res.status(200).json(
        addedProject,
    );
  } catch (error) {
    return res.status(409).json("Could't add a new locaetd at");
  }
};
