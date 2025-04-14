export const ProjectFrontendSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 md:w-1/2 border border-border rounded-sm p-4">
      <div className="w-full sm:w-1/3">
        <div className="h-64 bg-primary-foreground rounded-lg animate-pulse"></div>
      </div>
      <div className="w-full sm:w-2/3">
        <div className="h-6 bg-primary-foreground rounded-md w-3/4 mb-4 animate-pulse"></div>
        <div className="h-4 bg-primary-foreground rounded-md w-full mb-2 animate-pulse"></div>
        <div className="h-4 bg-primary-foreground rounded-md w-5/6 mb-2 animate-pulse"></div>
        <div className="h-4 bg-primary-foreground rounded-md w-full mb-2 animate-pulse"></div>
        <div className="h-4 bg-primary-foreground rounded-md w-4/5 mb-2 animate-pulse"></div>
        <div className="h-4 bg-primary-foreground rounded-md w-full mb-2 animate-pulse"></div>
        <div className="mt-4 flex gap-2">
          <div className="h-10 bg-primary-foreground rounded-md w-24 animate-pulse"></div>
          <div className="h-10 bg-primary-foreground rounded-md w-24 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
