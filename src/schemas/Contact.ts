import { z } from "zod";

export const contactTypeOption = [
  "Familair",
  "Trabajo",
  "Amigo",
  "Otro",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nombre requerido" })
    .min(3, { message: "Longitud minima 3" }),
  lastName: z
    .string()
    .min(1, { message: "Apellido requerido" })
    .min(3, { message: "Longitud minima 3" }),
  email: z
    .string()
    .min(1, { message: "Email requerido" })
    .email("Email invalido"),
  type: z.enum(contactTypeOption, {
    errorMap: () => ({ message: "Seleccione tipo" }),
  }),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };
