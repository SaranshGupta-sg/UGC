import { Request, Response } from "express";
import * as Sentry from "@sentry/node";

export const createProject = async (req: Request, res: Response) => {

    let tempProjectId: string;
    const { userId } = req.auth()
    let isCreditdeducted = false;

    const {name= ' New Project', aspectRatio, userPrompt, productName, productDescription, targetLength = 5} = req.body;

    const images: any = req.files;

    if (images.length < 2 || !productName) {
        return res.status(400).json({message: 'Please upload at least 2 images'})
    }

    

  try {
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.message });
  }
};

export const createVideo = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.message });
  }
};

export const getAllPublishedProjects = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    Sentry.captureException(error);
    res.status(500).json({ message: error.message });
  }
};
