interface PageHeaderProps {
  title: string;
  subTitle?: string;
  backgroundImageSrc?: string;
}

/**
 * A header component that is used on most pages, displays title of page, subtitle, as well as a background image
 * The reason this exists: Consistency with styling, and less repetitive time to remake the same html elements
 * @param {string} title The main title of the page
 * @param {string} subTitle The subtitle of the page
 * @param {string} backgroundImageSrc The source of the image via URL or path. If using URL, view NextJS documentation on URL-based images. If an image is not given, a placeholder image will be used instead.
 */
const PageHeader = ({
  title,
  subTitle,
  backgroundImageSrc,
}: PageHeaderProps) => {
  return (
    <header className="w-full h-[180px] flex flex-col items-center justify-center mb-10 relative overflow-hidden">
      <img
        src={
          backgroundImageSrc ||
          "./src/assets/images/placeholder/header-background.png"
        }
        alt="header-background"
        className="absolute object-cover w-full h-full opacity-60 z-0"
      />

      <div className="text-center space-y-2 z-10">
        <h1 className="text-2xl sm:text-4xl font-semibold text-foreground/70">
          {title}
        </h1>
        <h2 className="text-xs sm:text-sm">{subTitle}</h2>
      </div>
    </header>
  );
};

export default PageHeader;
