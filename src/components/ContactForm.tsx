import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Contact, contactSchema, contactTypeOption } from "../schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";

type Props = {
  onSubmit: (contact: Contact) => void;
};

function ContactForm({ onSubmit }: Props) {
  const methods = useForm<Contact>({ resolver: zodResolver(contactSchema) });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastName">Apellido</Input>
        <Input name="email">Email</Input>
        <Select
          name="type"
          defaultMessage="-- Selecciona Tipo --"
          options={contactTypeOption}
        >
          Tipo
        </Select>
        <Button type="submit">Enviar</Button>
        <Button onClick={() => methods.reset()} variant="secondary">
          Limpiar
        </Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
