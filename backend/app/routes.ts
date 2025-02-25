import express from "express";
import userRoutes from "./user/user.route";
import resumeRoutes from "./resume/resume.route";

// routes
const router = express.Router();

router.use("/resumes", resumeRoutes);
router.use("/users", userRoutes);

export default router;