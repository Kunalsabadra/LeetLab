import { Router } from "express"
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getAllSubmission, getAllTheSubmissionsForProblem, getSubmissionForProblem } from "../controllers/submission.controller.js";

export const submissionRoutes = Router();

submissionRoutes.get("/set-all-submissions", authMiddleware, getAllSubmission);

submissionRoutes.get("/get-submission/:id", authMiddleware, getSubmissionForProblem);

submissionRoutes.get("/get-submission-count/:problemId", authMiddleware, getAllTheSubmissionsForProblem);
