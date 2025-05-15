"use server"

import { db } from "@/db";

export type SaveConfigurationParameters = {
  configId: string;
  color: string;
  model: string;
  material: string;
  finish: string
}

export const saveConfiguration = async ({
  configId,
  color,
  model,
  material,
  finish
}: SaveConfigurationParameters ) => {
  try {
    await db.configuration.update({
      where: {
        id: configId
      },
      data: {
        color,
        model,
        finish,
        material
      }
    })
  } catch (error) {
    console.log(error)
  }
}