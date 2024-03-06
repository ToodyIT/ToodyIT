import { useTranslation } from "next-i18next";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const HomepageContact: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full rounded-xl items-center px-5 py-8 justify-between dark:bg-secondary bg-greyLight flex flex-col vl:flex-row">
      <div className="flex gap-4 item flex-col">
        <span className="text-4xl font-bold">
          {t("Application for the site")}
        </span>
        <span className="text-lg">
          {t("Leave your phone number so we can contact you")}
        </span>
      </div>
      <div className="flex-row gap-3 flex">
        <Input
          required
          // value={phone}
          type="tel"
          name="phone"
          className="rounded-lg"
          // onChange={(e) => setPhone(e.target.value)}
          // onBlur={() => setShouldValidatePhone(true)}
          // placeholder={t("Your phone number")}
          // hasError={!!phoneErrorMessage}
          // errorMessage={phoneErrorMessage}
          label={t("Your phone number")}
          autoComplete="tel"
          onKeyPress={(e) => {
            if (new RegExp(/[ ]/).test(e.key)) {
              e.preventDefault();
            }
          }}
        />
        <Button
          type="submit"
          className="flex self-center rounded-lg active:scale-[0.95] mt-4 items-center justify-center w-full max-w-[150px]"
        >
          {/* {isSubmittedSuccessfully ? (
              <CheckmarkIcon className="size-8 text-white/" />
            ) : (
              t("Send")
            )} */}
        </Button>
      </div>
    </div>
  );
};
