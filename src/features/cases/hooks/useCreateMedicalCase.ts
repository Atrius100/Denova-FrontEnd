"use client";

import { useMutation } from "@tanstack/react-query";

import { createMedicalCase } from "@/services/medical-cases.service";

export function useCreateMedicalCase() {
  return useMutation({
    mutationFn: createMedicalCase,
  });
}
