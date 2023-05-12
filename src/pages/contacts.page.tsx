import { NextPage } from "next";
import LayoutMain from "../components/Layout/LayoutMain";
import { Input } from "../components/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormLine } from "../components/FormColumn/FormColumn";
import { Textarea } from "../components/Textarea/Textarea";
import { Button } from "../components/Button/Button";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

type ContactFormType = {
  name: string;
  email: string;
  company: string;
  webType: string;
  message: string;
};

const Contacts: NextPage = ({}) => {
  const { t } = useTranslation();
  const { handleSubmit, register } = useForm<ContactFormType>();
  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log(data);
    const templateParams = {
      name: data.name,
      email: data.email,
      company: data.company,
      webType: data.webType,
      message: data.message,
    };
    emailjs.send(
      "service_wpxiwwr",
      "template_jiplvcb",
      templateParams,
      "SwwxDOa6Jx-pezWyi"
    );
  };

  return (
    <LayoutMain>
      <div className="flex flex-col gap-14 w-full pl-40">
        <h1 className="text-white text-3xl flex text-center pt-8">
          {t("Contacts")}
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-12 w-full max-w-[800px]"
        >
          <FormLine>
            <Input {...register("name")} />
            <Input {...register("email")} />
          </FormLine>
          <FormLine>
            <Input {...register("company")} />
            <Input {...register("webType")} />
          </FormLine>
          <Textarea {...register("message")} />
          <Button type="submit">{t("Send message")}</Button>
        </form>
      </div>
    </LayoutMain>
  );
};
export default Contacts;
