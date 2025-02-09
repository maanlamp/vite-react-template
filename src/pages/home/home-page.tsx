import { usePageTitle } from "lib/page-title";
import { useTranslation } from "react-i18next";

const HomePage = () => {
	const { t } = useTranslation();
	usePageTitle(t("pages.home.title"), []);

	return <h1>{t("pages.home.title")}</h1>;
};

export default HomePage;
