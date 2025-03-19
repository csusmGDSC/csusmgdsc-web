const LogoInfo = () => {
  return (
    <div className="text-blue font-bold">
      <ul className="space-y-4">
        <li className="flex items-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background text-blue hover:border-blue/80 hover:bg-blue/10 hover:text-darkBlue transition h-10 px-4 py-2 max-w-xs">
          <a target="_blank" href="https://github.com/csusmGDSC/csusmgdsc-web/blob/main/public/icon.svg">
            SVG logo
          </a>
        </li>
        <li className="flex items-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background text-blue hover:border-blue/80 hover:bg-blue/10 hover:text-darkBlue transition h-10 px-4 py-2 max-w-xs">
          <a target="_blank" href="http://goo.gle/gdsc-brand-guide">
            GDSC Brand Guidelines
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LogoInfo;
